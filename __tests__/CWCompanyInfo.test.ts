/**
 * Copyright (c) Tower Digital LLC, and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { config } from 'dotenv';
import { resolve } from 'path';
import { CWCompanyInfo } from '../src/client/CWCompanyInfo';

config({ path: resolve(__dirname, '../.env') });

describe('CWCompanyInfo', () => {
  test('Call static method and return CompanyInfo', async () => {
    const companyId: string = process.env.COMPANY_ID as string;
    const cloudUrl: string = process.env.CLOUD_URL as string;
    const companyInfo = await CWCompanyInfo.get(companyId, cloudUrl);
    expect(typeof companyInfo).toBe('object');
    expect(companyInfo.CompanyName).toBeTruthy();
  });
});
