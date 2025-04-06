import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Access'>;

export default function AccessScreen({ route, navigation }: Props) {
  const { deviceId } = route.params;
  const [generating, setGenerating] = useState(false);
  const [deviceName, setDeviceName] = useState('Loading...');

  useEffect(() => {
    // Mock lookup of device name by ID
    const lookupName = async () => {
        const mockDeviceMap: Record<string, string> = {
            '1': 'Front Door Lock',
            '2': 'Living Room Thermostat',
            '3': 'Garage Camera',
        };
        setDeviceName(mockDeviceMap[deviceId] || 'Unknown Device');
    };
    lookupName();
  }, [deviceId]);

  const handleAccessRequest = async () => {
    setGenerating(true);

    // Simulate ZKP generation delay
    await new Promise((res) => setTimeout(res, 2000));

    // In the future: generate ZK proof here and send it to the device

    setGenerating(false);

    // Simulate result and navigate
    const isValid = true; // ← mock result
    navigation.replace('AccessResult', {
      status: isValid ? 'success' : 'error',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Accessing:</Text>
      <Text style={styles.deviceName}>{deviceName}</Text>

      {generating ? (
        <>
          <Text style={styles.loadingText}>Generating Proof...</Text>
          <ActivityIndicator size="large" />
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleAccessRequest}>
          <Text style={styles.buttonText}>Request Access</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
