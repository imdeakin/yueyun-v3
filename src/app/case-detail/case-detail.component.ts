/**
 * Created by deakin on 17-2-27.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ApiData } from '../serv/api-data';
import { CaseItemData } from '../common/case-item/case-item-data';
import { CaseDetailServer } from './case-detail-server';
import { CaseListServer } from '../case-center/case-list-server';

@Component({
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit {
  public caseList: CaseItemData[]; // 案例列表
  public caseType: string; // 当前案例类型

  public title: string;
  public content: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private caseDetailServer: CaseDetailServer,
              private caseListServer: CaseListServer) {
  }

  public ngOnInit() {
    this.initServer();
  }

  public initServer() {
    let $this = this;
    let id: string;
    let type: string;
    this.route.params
      .switchMap((params: Params) => {
        return this.caseDetailServer.getDetail({
          id: params['id']
        });
      })
      .subscribe((data: ApiData) => {
        $this.caseDetailServer.extactReqData(data, (data) => {
          if (data.length) {
            this.title = data[0].innerTitle;
            this.content = data[0].innerText;
            this.getCaseList(data[0].categoryNo);
          }
        });
      });
  }

  public getCaseList(id: string) {
    this.caseListServer.getCaseList({
      page: 1,
      pageSize: 3,
      categoryNo: id
    }).subscribe((data: ApiData) => {
      this.caseDetailServer.extactReqData(data, (list) => {
        this.caseList = list;
        window.scrollTo(0, 0);
      });
    });
  }
}
