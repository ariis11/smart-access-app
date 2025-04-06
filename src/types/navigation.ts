export type RootStackParamList = {
  Welcome: undefined;
  CreateIdentity: undefined;
  ImportIdentity: undefined;
  Main: undefined;
  Access: { deviceId: string };
  AccessResult: { status: 'verifying' | 'success' | 'error' };
  ImportCredential: undefined;
};

export type TabRoutes = 'Home' | 'History' | 'Profile';