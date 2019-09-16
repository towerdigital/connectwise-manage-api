/**
 * Copyright (c) Tower Digital LLC, and Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import axios, { AxiosInstance, AxiosPromise, Method } from 'axios';
import { ConnectWiseOptions } from '../types';

export class ConnectWiseApi {
  http: AxiosInstance;

  constructor(options: ConnectWiseOptions) {
    this.http = axios.create({
      baseURL: options.apiUrl,
      timeout: 1000,
    });

    this.http.defaults.headers.common.Authorization = options.auth;
    this.http.defaults.headers.common.clientid = options.clientId;
    this.http.defaults.headers.common.Accept =
      'application/vnd.connectwise.com+json; version=2019.4';
  }

  request(url: string, method: Method): AxiosPromise<any> {
    return this.http({
      url,
      method,
    })
      .then(response => response)
      .catch(error => error);
  }
}
