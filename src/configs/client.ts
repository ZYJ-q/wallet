import { clientEnv } from 'env/client.mjs';
import { sepolia } from 'viem/chains';

export const chain = sepolia;
// eslint-disable-next-line no-self-compare
export const isDev = 'development' === 'development';
export const magicApiKey = clientEnv.NEXT_PUBLIC_MAGIC_API_KEY!;
export const gasManagerPolicyId = clientEnv.NEXT_PUBLIC_ALCHEMY_GAS_MANAGER_POLICY_ID!;
