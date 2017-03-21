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
      title: '技术总监',
      describe: '10年技术开发<br/>及项目管理经验'
    },
    {
      img: 'assets/img/about_bg_02.png',
      title: '技术总监',
      describe: '10年技术开发<br/>及项目管理经验'
    },
    {
      img: 'assets/img/about_bg_03.png',
      title: '技术总监',
      describe: '10年技术开发<br/>及项目管理经验'
    },
    {
      img: 'assets/img/about_bg_04.png',
      title: '技术总监',
      describe: '10年技术开发<br/>及项目管理经验'
    },
    {
      img: 'assets/img/about_bg_05.png',
      title: '技术总监',
      describe: '10年技术开发<br/>及项目管理经验'
    },
    {
      img: 'assets/img/about_bg_06.png',
      title: '技术总监',
      describe: '10年技术开发<br/>及项目管理经验'
    }
  ];

  public getAboutData(): AboutItemData[] {
    return this.aboutData;
  }
}
