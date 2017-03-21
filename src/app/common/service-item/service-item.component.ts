/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input } from '@angular/core';

import { ServiceItemData } from './service-item-data';

@Component({
  selector: 'service-item',
  templateUrl: 'service-item.component.html',
  styleUrls: ['service-item.component.css']
})
export class ServiceItemComponent {
  @Input() public data: ServiceItemData;
}
