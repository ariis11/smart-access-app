import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Credential } from '../../types/models';
import { getUserCredentials, saveUserCredentials } from '../../services/credentialService';
import styles from '../Home/styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ImportCredential'>;

export default function ImportCredentialScreen({ navigation }: Props) {
  const [input, setInput] = useState('');

  const handleImport = async () => {
    try {
      const parsed: Credential = JSON.parse(input);

      if (!parsed.deviceId || !parsed.deviceName || !parsed.deviceType) {
        Alert.alert('Invalid credential format');
        return;
      }

      const existing = await getUserCredentials();
      console.log('Existing credentials:', existing);
      const updated = [parsed, ...existing];
      console.log('Updated credentials:', updated);
      await saveUserCredentials(updated);

      Alert.alert('Credential imported successfully');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Error', 'Invalid JSON or unexpected error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Import Credential</Text>
      <TextInput
        multiline
        value={input}
        onChangeText={setInput}
        placeholder="Paste credential JSON here"
        style={[styles.deviceCard, { height: 150 }]}
      />
      <TouchableOpacity style={styles.deviceCard} onPress={handleImport}>
        <Text style={styles.deviceName}>Import</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
