/**
 * Created by Deakin on 2017/3/20 0020.
 */
import { Injectable } from '@angular/core';

import { AboutItemData } from './about-item-data';

@Injectable()
export class AboutServer {
  public aboutData: AboutItemData[] = [
    {
      img: 'assets/img/about_bg_01.png',
      title: '总经理',
      describe: '8年技术开发及项目管理经验<br/>'
    },
    {
      img: 'assets/img/about_bg_02.png',
      title: '技术总监',
      describe: '6年移动互联网应用开发经验；<br/>熟悉Android、iOS等主流移动开发平台的开发'
    },
    {
      img: 'assets/img/about_bg_03.png',
      title: '项目经理',
      describe: '6年移动互联网应用开发经验；<br/>熟悉Android 移动开发平台的开发'
    },
    {
      img: 'assets/img/about_bg_04.png',
      title: 'JAVA工程师',
      describe: '4年JAVA开发及系统架构设计经验'
    },
    {
      img: 'assets/img/about_bg_05.png',
      title: 'IOS工程师',
      describe: '3年IOS开发经验<br/>'
    },
    {
      img: 'assets/img/about_bg_06.png',
      title: '产品需求分析师',
      describe: '3年产品需求分析及丰富的客户沟通经验'
    }
  ];

  public getAboutData(): AboutItemData[] {
    return this.aboutData;
  }
}
