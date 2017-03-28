/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input, OnInit } from '@angular/core';

import { boardIds } from '../../home/board-ids';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  @Input() public activeIndex;
  @Input() public type: number;
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
      link: '/geju'
    }
  ];
  public tel = '020-37579981';
  public id = 'app-header';

  public ngOnInit(): void {
    if (this.type === 1) {
      this.items = [
        {
          title: '首页',
          url: '/home'
        },
        {
          title: '案例展示',
          url: '/case-center'
        },
        // {
        //   title: '解决方案',
        //   url: '/scheme-center'
        // },
        // {
        //   title: '开发流程',
        //   url: '/process-center'
        // },
        {
          title: '关于我们',
          url: '/about'
        },
        {
          title: '格局',
          url: '/geju'
        }
      ];
    }
  }

  public getItemStyle(index: number) {
    return {
      'text-main': this.activeIndex === index,
      'text-sub': this.activeIndex !== index
    };
  }
}
