import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';
import { generateDID } from '../../services/identityService';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateIdentity'>;

export default function CreateIdentityScreen({ navigation }: Props) {
  const [loading, setLoading] = useState(false);
  const [did, setDid] = useState<string | null>(null);

  const handleGenerateIdentity = async () => {
    setLoading(true);
    const { did, privateKey } = await generateDID();
    console.log('did: ' + did);
    console.log('privateKey: ' + privateKey);

    // Store DID + private key locally (later: encrypt this)
    await AsyncStorage.setItem('did', did);
    await AsyncStorage.setItem('privateKey', privateKey);

    setDid(did);
    setLoading(false);

    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Identity</Text>
      <Text style={styles.subtitle}>A decentralized identifier (DID) will be created and securely stored.</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleGenerateIdentity}>
          <Text style={styles.buttonText}>Generate Identity</Text>
        </TouchableOpacity>
      )}

      {did && (
        <Text style={styles.didText}>
          DID: {did}
        </Text>
      )}
    </View>
  );
}
