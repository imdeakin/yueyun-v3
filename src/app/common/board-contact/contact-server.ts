/**
 * Created by Administrator on 2017/3/2.
 */
import { Injectable } from '@angular/core';

import { ApiServer } from '../../serv/api-server';
import { ApiConfig } from '../../serv/api-config';
import { ReqOpts } from '../../serv/req-opts';

import { User } from './user';

declare let $: any;
declare let layer: any;

@Injectable()
export class ContactServer {

  constructor(private apiServer: ApiServer) {
  }

  public parseParam(data): string {
    let param = '';
    for (let key in data) {
      param += (param ? '&' : '') + key + '=' + data[key];
    }
    return param;
  }

  public create(user: User): void {
    let options: ReqOpts = {
      url: ApiConfig.apiPath.contact,
      data: this.parseParam(user),
      success: () => {
        layer.msg('提交成功');
      },
      failure: () => {
        layer.msg('提交失败');
      }
    };

    this.apiServer.post(options);
  }

}
