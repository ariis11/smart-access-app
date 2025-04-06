import { Credential } from '../types/models';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AccessLog } from '../types/models';

const LOG_STORAGE_KEY = 'access_logs';
const STORAGE_KEY = 'user_credentials';

export async function getUserCredentials(): Promise<Credential[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function saveUserCredentials(creds: Credential[]) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(creds));
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