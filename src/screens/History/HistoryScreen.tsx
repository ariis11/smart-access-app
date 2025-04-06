import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { AccessLog } from '../../types/models';
import { getAccessLogs } from '../../services/credentialService';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'History'>;

export default function HistoryScreen({ navigation }: Props) {
  const [logs, setLogs] = useState<AccessLog[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getAccessLogs();
      setLogs(data);
    };
    load();
  }, []);

  const renderItem = ({ item }: { item: AccessLog }) => {
    const date = new Date(item.timestamp).toLocaleString();
    const icon = item.status === 'success' ? '✅' : '❌';

    return (
      <View style={styles.logItem}>
        <Text style={styles.logText}>
          {icon} {item.deviceName} — {date}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Text style={styles.header}>Access History</Text>
      <FlatList
        data={logs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
