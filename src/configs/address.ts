import { LightSmartContractAccount, getDefaultLightAccountFactoryAddress } from '@alchemy/aa-accounts';
import { AlchemyProvider } from '@alchemy/aa-alchemy';
import { LocalAccountSigner, type Hex } from '@alchemy/aa-core';
import { polygonMumbai } from 'viem/chains';

const chain = polygonMumbai;

// The private key of your EOA that will be the owner of Light Account
const PRIVATE_KEY = 'Gve6XCsV0TSHQMN4tI8Pc2NZ0pXgfGyH' as Hex;
const owner = LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY);

// Create a provider to send user operations from your smart account
const Address = new AlchemyProvider({
  // get your Alchemy API key at https://dashboard.alchemy.com
  apiKey: 'Gve6XCsV0TSHQMN4tI8Pc2NZ0pXgfGyH',
  chain
}).connect(
  (rpcClient) =>
    new LightSmartContractAccount({
      rpcClient,
      owner,
      chain,
      factoryAddress: getDefaultLightAccountFactoryAddress(chain)
    })
);

export default Address;
