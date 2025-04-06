import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Access</Text>
      <Text style={styles.subtitle}>
        Private, decentralized access to your smart devices.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateIdentity')}
      >
        <Text style={styles.buttonText}>Create New Identity</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('ImportIdentity')}
      >
        <Text style={styles.buttonText}>Import Existing Identity</Text>
      </TouchableOpacity>
    </View>
  );
}
