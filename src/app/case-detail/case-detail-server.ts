/**
 * Created by Deakin on 2017/3/24 0024.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiData } from '../serv/api-data';
import { ReqOpts } from '../serv/req-opts';
import { ApiConfig } from '../serv/api-config';

declare let $: any;

@Injectable()
export class CaseDetailServer {
  private headers = new Headers({'content-type': 'application/x-www-form-urlencoded'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {
  }

  public getDetail(data): Observable<ApiData> {
    let url = ApiConfig.apiPath.getCaseDetail;
    return this.http.post(url, $.param(data), this.options)
      .map(this.extactData);
  }

  /**
   * 解析响应数据
   * @param data
   * @param success
   * @param failure
   */
  public extactReqData(data: ApiData, success?: any, failure?: any) {
    if (data.success) {
      if (success) {
        success(data.root);
      }
    } else {
      if (failure) {
        failure(data.result);
      }
    }
  }

  /**
   * 转化响应数据为json
   * @param res
   * @returns {any}
   */
  private extactData(res: Response): ApiData {
    let data = res.json() as ApiData;
    return data;
  }
}
