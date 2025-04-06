import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ImportIdentity'>;

export default function ImportIdentityScreen({ navigation }: Props) {
  const [did, setDid] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const handleImport = async () => {
    if (!did || !privateKey) {
      Alert.alert('Error', 'Both DID and private key are required.');
      return;
    }

    try {
      await AsyncStorage.setItem('did', did.trim());
      await AsyncStorage.setItem('privateKey', privateKey.trim());

      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    } catch (error) {
      Alert.alert('Storage Error', 'Failed to save identity. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Import Identity</Text>
      <Text style={styles.subtitle}>Paste your saved DID and private key below.</Text>

      <TextInput
        style={styles.input}
        placeholder="Your DID"
        value={did}
        onChangeText={setDid}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Your Private Key"
        value={privateKey}
        onChangeText={setPrivateKey}
        autoCapitalize="none"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleImport}>
        <Text style={styles.buttonText}>Import and Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
