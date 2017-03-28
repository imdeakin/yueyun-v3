/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ApiData } from '../../serv/api-data';
import { CaseItemData } from '../../common/case-item/case-item-data';
import { CaseListServer } from '../case-list-server';
import { caseNavData } from '../../common/board-case/case-nav-data';

declare let $: any;

@Component({
  templateUrl: 'case-content.component.html',
  styleUrls: ['case-content.component.css']
})
export class CaseContentComponent implements OnInit {
  public id: string = 'case-content';
  public navItems = caseNavData; // 导航列表
  public curCaseList: CaseItemData[]; // 当前案例列表
  public curCaseType: string; // 当前案例类型
  public curPageIndex: number; // 分页当前页索引
  public perPage: number = 12;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: CaseListServer) {
  }

  public ngOnInit() {
    let $this = this;
    let id: string;
    let idx: string;
    this.route.params
      .switchMap((params: Params) => {
        id = params['id'];
        idx = params['idx'] || 0;
        $this.curCaseType = id;
        $this.curPageIndex = +idx;
        return this.service.getCaseList({
          page: +idx + 1,
          pageSize: $this.perPage,
          categoryNo: id
        });
      })
      .subscribe((data: ApiData) => {
        let total = data.total;
        $this.service.extactReqData(data, (list) => {
          $this.curCaseList = list;
          $this.initPagination(total);
        });
      });
  }

  public initPagination(total) {
    let $this = this;
    $('#' + this.id + ' .pagination').pagination(total, {
      items_per_page: $this.perPage,
      current_page: $this.curPageIndex,
      prev_text: '上一页',
      next_text: '下一页',
      link_to: 'javascript:;',
      selected_callback: (index) => {    // 页数变化后的回调函数
        if (index !== $this.curPageIndex) {
          $this.curPageIndex = index;
          $this.router.navigate(['/case-center', $this.curCaseType, {idx: index}]);
        }
        return false;
      }
    });
  }
}
