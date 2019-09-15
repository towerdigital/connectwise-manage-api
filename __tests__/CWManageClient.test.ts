import { config } from 'dotenv';
import { resolve } from 'path';
import { CWManageClient } from '../src/client/CWManageClient';
import { ClientConfig } from '../src/client/types';

config({ path: resolve(__dirname, '../.env') });

describe('ConnectWise Client Test Suite', () => {
  let manageClient: CWManageClient;

  beforeAll(() => {
    const companyId: string = process.env.COMPANY_ID as string;
    const clientId: string = process.env.CLIENT_ID as string;
    const privateKey: string = process.env.PRIVATE_KEY as string;
    const publicKey: string = process.env.PUBLIC_KEY as string;

    const config: ClientConfig = {
      companyId,
      clientId,
      privateKey,
      publicKey,
      cloudUrl: process.env.CLOUD_URL,
    };

    manageClient = new CWManageClient(config);
  });

  test('You can create an instance of CWManageClient', () => {
    expect(manageClient).toBeInstanceOf(CWManageClient);
    expect(manageClient.config.companyId.length).toBeGreaterThan(1);
  });
});
