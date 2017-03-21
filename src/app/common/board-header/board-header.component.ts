/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'board-header',
  templateUrl: 'board-header.component.html',
  styleUrls: ['board-header.component.css']
})
export class BoardHeaderComponent {
  @Input() public color;
  @Input() public title;
}
