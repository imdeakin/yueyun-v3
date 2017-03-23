/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input, AfterViewInit } from '@angular/core';

import { boardIds } from '../../home/board-ids';

declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.css']
})
export class AppHeaderComponent implements AfterViewInit {
  @Input() public activeIndex;
  public items = [
    {
      title: '首页',
      url: '#' + boardIds.home
    },
    {
      title: '案例展示',
      url: '#' + boardIds.case
    },
    {
      title: '解决方案',
      url: '#' + boardIds.scheme
    },
    {
      title: '开发流程',
      url: '#' + boardIds.process
    },
    {
      title: '关于我们',
      url: '#' + boardIds.about
    },
    {
      title: '格局',
      url: 'geju.html'
    }
  ];
  public tel = '020-37579981';
  public id = 'app-header';

  public ngAfterViewInit(): void {
    $('#' + this.id + ' .nav').onePageNav();
  }

  public getItemStyle(index: number) {
    return {
      'text-main': this.activeIndex === index,
      'text-sub': this.activeIndex !== index
    };
  }
}
