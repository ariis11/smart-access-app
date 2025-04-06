import { Credential } from '../types/models';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AccessLog } from '../types/models';

const LOG_STORAGE_KEY = 'access_logs';

export async function getUserCredentials(): Promise<Credential[]> {
  // In the future: Load from local storage or decentralized store
  return [
    {
      id: 'cred1',
      deviceId: '1',
      deviceName: 'Front Door Lock',
      deviceType: 'lock',
      issuedBy: 'did:issuer:abc123',
    },
    {
      id: 'cred2',
      deviceId: '2',
      deviceName: 'Front Door Lock',
      deviceType: 'lock',
      issuedBy: 'did:issuer:abc123',
    },
    {
      id: 'cred3',
      deviceId: '3',
      deviceName: 'Garage Camera',
      deviceType: 'camera',
      issuedBy: 'did:issuer:def456',
    },
  ];
}

export async function saveAccessLog(log: AccessLog) {
  const raw = await AsyncStorage.getItem(LOG_STORAGE_KEY);
  const existing = raw ? JSON.parse(raw) : [];
  existing.unshift(log);
  await AsyncStorage.setItem(LOG_STORAGE_KEY, JSON.stringify(existing));
}

export async function getAccessLogs(): Promise<AccessLog[]> {
  const raw = await AsyncStorage.getItem(LOG_STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}