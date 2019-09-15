import { config } from 'dotenv';
import { resolve } from 'path';
import { CWManageClient } from '../src/client/CWManageClient';
import { ClientConfig } from '../src/client/types';

config({ path: resolve(__dirname, '../.env') });

describe('ConnectWise Client Test Suite', () => {
  let manageClient: CWManageClient;

  beforeAll(() => {
    const config: ClientConfig = {
      companyId: process.env.COMPANY_ID,
      clientId: process.env.CLIENT_ID,
      privateKey: process.env.PRIVATE_KEY,
      publicKey: process.env.PUBLIC_KEY,
      cloudUrl: process.env.CLOUD_URL,
    };

    manageClient = new CWManageClient(config);
  });

  test('You can create an instance of CWManageClient', () => {
    expect(manageClient).toBeInstanceOf(CWManageClient);
    expect(manageClient.config.companyId.length).toBeGreaterThan(1);
  });
});
