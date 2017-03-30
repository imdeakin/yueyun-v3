/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input } from '@angular/core';

import { PartnerItemData } from './partner-item-data';

@Component({
  selector: 'partner-item',
  templateUrl: 'partner-item.component.html',
  styleUrls: ['partner-item.component.css']
})
export class PartnerItemComponent {
  // @Input() public style;
  @Input() public data: PartnerItemData;
  // public conStyle = {
  //   width: this.style && this.style.width || 238,
  //   height: this.style && this.style.height || 151
  // };
}
