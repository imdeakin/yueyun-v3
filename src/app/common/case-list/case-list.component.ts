/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input } from '@angular/core';

import { ApiConfig } from '../../serv/api-config';

import { CaseItemData } from './case-item-data';

@Component({
  selector: 'case-item',
  templateUrl: 'case-item.component.html',
  styleUrls: ['case-item.component.css']
})
export class CaseItemComponent {
  @Input() public data: CaseItemData;
  public ApiConfig = ApiConfig;
}
