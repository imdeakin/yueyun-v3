/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, AfterViewInit } from '@angular/core';

import { ScrollToTop } from '../../plugins/scroll-to-top';

declare let $: any;

@Component({
  selector: 'float-btns',
  templateUrl: 'float-btns.component.html',
  styleUrls: ['float-btns.component.css']
})
export class FloatBtnsComponent implements AfterViewInit {
  constructor(private scrollToTop: ScrollToTop) {
  }

  public ngAfterViewInit(): void {
    this.scrollToTop.init('.to-top-btn');
  }
}
