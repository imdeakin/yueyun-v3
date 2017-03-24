/**
 * Created by deakin on 17-2-27.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ApiData } from '../serv/api-data';
import { SchemeDetailServer } from './scheme-detail-server';

@Component({
  templateUrl: './scheme-detail.component.html',
  styleUrls: ['./scheme-detail.component.css']
})
export class SchemeDetailComponent implements OnInit {
  public title: string;
  public content: string;

  constructor(private route: ActivatedRoute,
              private schemeDetailServer: SchemeDetailServer) {
  }

  public ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        return this.schemeDetailServer.getDetail({
          id: params['id']
        });
      })
      .subscribe((data: ApiData) => {
        this.schemeDetailServer.extactReqData(data, (data) => {
          if (data.length) {
            this.title = data[0].innerTitle;
            this.content = data[0].innerText;
          }
        });
      });
  }
}
