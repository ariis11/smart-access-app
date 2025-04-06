export type Device = {
    id: string;
    name: string;
    type: 'lock' | 'thermostat' | 'camera';
};

export type Credential = {
    id: string;
    deviceId: string;
    deviceName: string;
    deviceType: 'lock' | 'thermostat' | 'camera';
    issuedBy: string;
    expiresAt?: string;
};
  
export type AccessLog = {
    id: string;
    deviceName: string;
    status: 'success' | 'error';
    timestamp: number;
};
  