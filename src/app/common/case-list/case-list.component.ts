/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input } from '@angular/core';

import { CaseItemData } from '../case-item/case-item-data';

@Component({
  selector: 'case-list',
  templateUrl: 'case-list.component.html',
  styleUrls: ['case-list.component.css']
})
export class CaseListComponent {
  @Input() public list: CaseItemData[];
}
