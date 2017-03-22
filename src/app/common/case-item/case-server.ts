/**
 * Created by Deakin on 2017/3/20 0020.
 */
import { Injectable } from '@angular/core';

import { ApiServer } from '../../serv/api-server';
import { ApiConfig } from '../../serv/api-config';

import { ReqOpts } from '../../serv/req-opts';

declare let $: any;

@Injectable()
export class CaseServer {
  constructor(private apiServer: ApiServer) {
  }

  public getCaseList(data, success, failure?): void {
    let opts: ReqOpts = {
      url: ApiConfig.apiPath.getCaseList,
      data: $.param(data),
      success: (data) => {
        success(data);
      },
      failure: () => {
        console.error('Get case list error!');
      }
    };
    this.apiServer.post(opts);
  }
}
