/**
 * Copyright (c) Tower Digital LLC, and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { config } from 'dotenv';
import { resolve } from 'path';
import { ConnectWiseManageClient } from '../src/client/ConnectWiseManageClient';
import { ConnectWiseOptions } from '../src/client/types';

config({ path: resolve(__dirname, '../.env') });

describe('CWManageClient', () => {
  let cwManage: ConnectWiseManageClient;

  beforeAll(() => {
    const companyId: string = process.env.COMPANY_ID as string;
    const clientId: string = process.env.CLIENT_ID as string;
    const privateKey: string = process.env.PRIVATE_KEY as string;
    const publicKey: string = process.env.PUBLIC_KEY as string;

    const config: ConnectWiseOptions = {
      companyId,
      clientId,
      privateKey,
      publicKey,
      cloudUrl: process.env.CLOUD_URL,
    };

    cwManage = new ConnectWiseManageClient(config);
  });

  test('You can create an instance of ConnectWiseManageClient', () => {
    expect(cwManage).toBeInstanceOf(ConnectWiseManageClient);
    expect(cwManage.config.companyId.length).toBeGreaterThan(1);
    expect(cwManage.config.companyId).toBeTruthy();
  });

  test('That it throws an error without valid options object', () => {
    const createInstance = () => {
      // @ts-ignore
      // noinspection JSUnusedLocalSymbols
      const cwManage = new ConnectWiseManageClient();
    };
    expect(createInstance).toThrow(Error);
  });
});
