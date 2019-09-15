/**
 * Copyright (c) Tower Digital LLC, and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ClientConfig } from './types';

export class CWManageClient {
  private config: ClientConfig;

  constructor(config: ClientConfig) {
    this.config = config;
    this.config.authRaw = `${this.config.companyId}+${this.config.publicKey}+${this.config.privateKey}`;
    this.config.auth = `Basic ${Buffer.from(this.config.authRaw).toString('base64')}`;
  }
}
