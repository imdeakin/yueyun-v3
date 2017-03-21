/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input } from '@angular/core';

import { SchemeItemData } from './scheme-item-data';

@Component({
  selector: 'scheme-item',
  templateUrl: 'scheme-item.component.html',
  styleUrls: ['scheme-item.component.css']
})
export class SchemeItemComponent {
  @Input() public data: SchemeItemData;
}
