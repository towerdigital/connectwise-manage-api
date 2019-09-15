/**
 * Copyright (c) Tower Digital LLC, and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ClientOptions } from './types';

export class CWManageClient {
  config: ClientOptions;

  constructor(options: ClientOptions) {
    if (!options) throw new Error('Must provide a valid options object');

    if (!options.companyId) throw new Error('Must provide the company id');

    if (!options.privateKey) throw new Error('Must provide an api private key');

    if (!options.publicKey) throw new Error('Must provide an api public key');

    this.config = options;

    this.config.codeBase = options.codeBase || 'v4_6_release';
    this.config.apiVersion = options.apiVersion || '3.0';
    this.config.apiUrl = `https://${this.config.cloudUrl}/${this.config.codeBase}/apis/${this.config.apiVersion}/`;
    this.config.authRaw = `${this.config.companyId}+${this.config.publicKey}+${this.config.privateKey}`;
    this.config.auth = `Basic ${Buffer.from(this.config.authRaw).toString('base64')}`;
  }
}
