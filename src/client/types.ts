/**
 * Copyright (c) Tower Digital LLC, and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface CompanyInfo {
  CompanyName: string;
  Codebase: string;
  VersionCode: string;
  VersionNumber: string;
  CompanyID: string;
  IsCloud: string;
}

export interface ClientConfig {
  apiUrl?: string;
  apiVersion?: string;
  authRaw?: string;
  auth?: string;
  clientId: string;
  cloudUrl?: string;
  companyId: string;
  publicKey: string;
  privateKey: string;
}
