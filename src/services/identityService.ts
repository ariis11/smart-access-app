import * as Crypto from 'expo-crypto';

export async function generateDID(): Promise<{ did: string; privateKey: string }> {
  const key = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, Date.now().toString());
  const did = `did:smart:${key.slice(0, 20)}`;
  return { did, privateKey: key };
}
