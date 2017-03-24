/**
 * Created by deakin on 17-2-27.
 */
import { Component } from '@angular/core';

import { caseNavData } from '../common/board-case/case-nav-data';

@Component({
  templateUrl: './case-center.component.html',
  styleUrls: ['./case-center.component.css']
})
export class CaseCenterComponent {
  public navItems = caseNavData; // 导航列表
}
