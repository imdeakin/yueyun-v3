/**
 * Created by deakin on 17-2-27.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'geju-page4',
  templateUrl: './geju-page4.component.html',
  styleUrls: ['./geju-page4.component.css']
})
export class GejuPage4Component {
  public data = [
    {
      title: '名片管理',
      icon: '&#xe6b4;',
      data: [
        {
          title: '一看就懂，超实用客户名片管理',
          content: '快速拍照一键智能识别添加名片，有效积累客户不再流失'
        },
        {
          title: '您的电子名片夹',
          content: '随时随地云端保存，永久保留方便查阅'
        }
      ]
    },
    {
      title: '日程管理',
      icon: '&#xe632;',
      data: [
        {
          title: '日程小管家管理',
          content: '随时随地，记录重要日程事项'
        },
        {
          title: '组织会议日程提醒',
          content: '组织会议，协会活动，名家论坛一个不漏，贴心提醒'
        }
      ]
    },
    {
      title: '公告管理',
      icon: '&#xe6a2;',
      data: [
        {
          title: '已读未读清晰掌握',
          content: '保障最新组织公告资讯无遗漏'
        },
        {
          title: '协会通知即时送达',
          content: '成员即时了解协会最新通知动态'
        }
      ]
    }
  ];
  public curIndex = 0;

  public switchCard(index): void {
    this.curIndex = index;
  }
}
