/**
 * Created by Deakin on 2017/3/20 0020.
 */
import { Injectable } from '@angular/core';

import { CaseItemData } from './case-item-data';

@Injectable()
export class CaseServer {
  public caseData: CaseItemData[] = [
    {
      img: 'assets/img/case_01.jpg',
      name: '讯高水壶有限公司',
      type: '商城类网站',
      describe: '询价、商品展示'
    },
    {
      img: 'assets/img/case_01.jpg',
      name: '讯高水壶有限公司',
      type: '商城类网站',
      describe: '询价、商品展示'
    },
    {
      img: 'assets/img/case_01.jpg',
      name: '讯高水壶有限公司',
      type: '商城类网站',
      describe: '询价、商品展示'
    },
    {
      img: 'assets/img/case_01.jpg',
      name: '讯高水壶有限公司',
      type: '商城类网站',
      describe: '询价、商品展示'
    }
  ];

  public getCaseData(): CaseItemData[] {
    return this.caseData;
  }
}
