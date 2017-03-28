/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, OnInit } from '@angular/core';

import { CaseItemData } from '../case-item/case-item-data';
import { CaseServer } from '../case-item/case-server';
import { caseNavData } from './case-nav-data';
import { boardIds } from '../../home/board-ids';

@Component({
  selector: 'board-case',
  templateUrl: 'board-case.component.html',
  styleUrls: ['board-case.component.css']
})
export class BoardCaseComponent implements OnInit {
  public id = boardIds.case;

  public hColor;
  public hTitle = '案例展示';

  public navItems = caseNavData; // 导航列表
  public curCaseList: CaseItemData[]; // 当前案例列表
  public curCaseType: string; // 当前案例类型
  public caseData = {}; // 案例数据

  constructor(private caseServer: CaseServer) {
  }

  public ngOnInit(): void {
    this.initCateData();
  }

  public initCateData() {
    for (let i = 0, len = this.navItems.length; i < len; i++) {
      this.getCaseList(this.navItems[i].id);
    }
  }

  public getCaseList(type: string) {
    let $this = this;
    this.caseServer.getCaseList({
      page: 1,
      pageSize: 4,
      categoryNo: type
    }, (list) => {
      $this.caseData['type' + type] = list;
      if (type === $this.navItems[0].id) {
        this.switchList(type); // 默认第一个类型的列表
      }
    });
  }

  public switchList(id: string): void {
    let list = this.caseData['type' + id];
    if (list) {
      this.curCaseList = list;
      this.curCaseType = id;
    } else {
      this.getCaseList(id);
    }
  }
}
