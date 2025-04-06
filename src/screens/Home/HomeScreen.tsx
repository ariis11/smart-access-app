import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { Credential } from '../../types/models';
import { getUserCredentials } from '../../services/credentialService';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [credentials, setCredentials] = useState<Credential[]>([]);

  useEffect(() => {
    const load = async () => {
      const creds = await getUserCredentials();
      setCredentials(creds);
    };
    load();
  }, []);

  const renderItem = ({ item }: { item: Credential }) => (
    <TouchableOpacity
      style={styles.deviceCard}
      onPress={() => navigation.navigate('Access', { deviceId: item.deviceId })}
    >
      <Text style={styles.deviceName}>{item.deviceName}</Text>
      <Text style={styles.deviceType}>{item.deviceType.toUpperCase()}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Text style={styles.header}>Your Devicess</Text>
      <FlatList
        data={credentials}
        keyExtractor={(item) => item.deviceId}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}
