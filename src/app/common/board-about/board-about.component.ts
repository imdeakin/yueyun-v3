/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, OnInit } from '@angular/core';

import { AboutItemData } from '../about-item/about-item-data';
import { AboutServer } from '../about-item/about-server';

import { boardIds } from '../../home/board-ids';

@Component({
  selector: 'board-about',
  templateUrl: 'board-about.component.html',
  styleUrls: ['board-about.component.css']
})
export class BoardAboutComponent implements OnInit {
  public hColor;
  public hTitle = '关于我们';
  public content = '广州悦云信息科技立足于提供整套移动互联网定制研发解决方案—我们专注于APP行业应用开发、软件定制开发企业资源计划ERP开发、<br/>' +
    '微信应用开发、网站建设等。我们专业提供需求评估、项目规划、视觉设计、前端制作、程序开发等。<br/>' +
    '我们的服务宗旨：为客户提供尖端的服务和优质的产品技术质量保证为宗旨!<br/>' +
    '我们的员工准则：用心做事，诚实做人!<br/>' +
    '我们的企业文化：服务于客户，贡献于社会！';
  public id = boardIds.about;

  public aboutList: AboutItemData[];

  constructor(private aboutServer: AboutServer) {
  }

  public ngOnInit(): void {
    this.aboutList = this.aboutServer.getAboutData();
  }
}
