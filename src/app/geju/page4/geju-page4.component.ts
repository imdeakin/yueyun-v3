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
      title: '我的名片',
      icon: '&#xe6b4;',
      data: [
        {
          title: '随时随地发通知',
          content: '发送图文通知，重要信息图文并茂'
        },
        {
          title: '已读未读清晰掌握',
          content: '保障最新通知资讯无遗漏'
        },
        {
          title: '海量的合作机会',
          content: '各协会之间资讯相通无障碍，一个平台全搞定。'
        }
      ]
    },
    {
      title: '日程',
      icon: '&#xe632;',
      data: [
        {
          title: '随时随地发通知',
          content: '发送图文通知，重要信息图文并茂'
        },
        {
          title: '已读未读清晰掌握',
          content: '保障最新通知资讯无遗漏'
        },
        {
          title: '海量的合作机会',
          content: '各协会之间资讯相通无障碍，一个平台全搞定。'
        }
      ]
    },
    {
      title: '发公告',
      icon: '&#xe6a2;',
      data: [
        {
          title: '随时随地发通知',
          content: '发送图文通知，重要信息图文并茂'
        },
        {
          title: '已读未读清晰掌握',
          content: '保障最新通知资讯无遗漏'
        },
        {
          title: '海量的合作机会',
          content: '各协会之间资讯相通无障碍，一个平台全搞定。'
        }
      ]
    }
  ];
  public curIndex = 0;

  public switchCard(index): void {
    this.curIndex = index;
  }
}
