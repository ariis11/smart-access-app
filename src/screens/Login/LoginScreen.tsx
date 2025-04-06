import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Mock logic: accept only hardcoded credentials
    if (username === 'admin' && password === '123') {
      setError('');
      navigation.replace('Home');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Access</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        autoCapitalize="none"
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
