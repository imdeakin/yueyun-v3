/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, AfterViewInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'float-btns',
  templateUrl: 'float-btns.component.html',
  styleUrls: ['float-btns.component.css']
})
export class FloatBtnsComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    $('#float-btns .btn-group')
  }
}
