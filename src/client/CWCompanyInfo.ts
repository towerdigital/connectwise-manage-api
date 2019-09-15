/**
 * Copyright (c) Tower Digital LLC, and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import axios from 'axios';
import { CompanyInfo } from './types';

export class CWCompanyInfo {
  /**
   * Look up api version using Company info endpoint
   *
   * @param loginCompanyId string
   * @param cloudUrl string
   */
  static async get(
    loginCompanyId: string,
    cloudUrl: string = 'https://na.myconnectwise.net'
  ): Promise<CompanyInfo> {
    const url: string = `${cloudUrl}/login/companyinfo/${loginCompanyId}`;

    return axios.get(url).then(response => {
      return <CompanyInfo>response.data;
    });
  }
}
