/**
 * Created by Deakin on 2017/3/20 0020.
 */
import { Injectable } from '@angular/core';

import { ApiServer } from '../../serv/api-server';
import { ApiConfig } from '../../serv/api-config';

declare let $: any;

@Injectable()
export class CaseServer {
  constructor(private apiServer: ApiServer) {
  }

  public getCaseList(data, success, failure?): void {
    this.apiServer.post({
      url: ApiConfig.apiPath.getCaseList,
      data: $.param(data),
      success: (data) => {
        success(data);
      },
      failure: () => {
        console.error('Get case list error!');
      }
    });
  }
}
