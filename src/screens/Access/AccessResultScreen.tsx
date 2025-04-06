import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { saveAccessLog } from '../../services/credentialService';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'AccessResult'>;

export default function AccessResultScreen({ route, navigation }: Props) {
  const { status } = route.params;

  const renderMessage = () => {
    switch (status) {
      case 'verifying':
        return 'Verifying your proof...';
      case 'success':
        return '✅ Access Granted!';
      case 'error':
        return '❌ Access Denied.';
      default:
        return 'Unknown result.';
    }
  };

  useEffect(() => {
    const logAccess = async () => {
      await saveAccessLog({
        id: Date.now().toString(),
        deviceName: 'Mock Device', // later you can pass it via route params
        status,
        timestamp: Date.now(),
      });
    };
  
    logAccess();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Access Result</Text>
      <Text style={styles.deviceName}>{renderMessage()}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Main' }] })}
      >
        <Text style={styles.buttonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
