/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input } from '@angular/core';

import { AboutItemData } from './about-item-data';

@Component({
  selector: 'about-item',
  templateUrl: 'about-item.component.html',
  styleUrls: ['about-item.component.css']
})
export class AboutItemComponent {
  @Input() public data: AboutItemData;
}
