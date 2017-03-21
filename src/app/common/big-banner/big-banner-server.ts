/**
 * Created by Deakin on 2017/3/21 0021.
 */
import { Injectable } from '@angular/core';

import { ApiServer } from '../../serv/api-server';
import { ApiConfig } from '../../serv/api-config';

@Injectable()
export class BigBannerServer {
  constructor(private apiServer: ApiServer) {
  }

  public getBannerList(success, failure?): void {
    this.apiServer.post({
      url: ApiConfig.apiPath.getBannerList,
      data: '',
      success: (data) => {
        success(data);
      },
      failure: () => {
        console.error('Get banner list error!');
      }
    });
  }
}
