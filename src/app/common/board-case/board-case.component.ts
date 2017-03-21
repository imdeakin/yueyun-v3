/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component } from '@angular/core';

import { CaseItemData } from '../case-item/case-item-data';
import { CaseServer } from '../case-item/case-server';

@Component({
  selector: 'board-case',
  templateUrl: 'board-case.component.html',
  styleUrls: ['board-case.component.css']
})
export class BoardCaseComponent {
  public hColor;
  public hTitle = '案例展示';

  public caseList: CaseItemData[];

  constructor(private caseServer: CaseServer) {
  }

  public ngOnInit(): void {
    this.caseList = this.caseServer.getCaseData();
  }
}
