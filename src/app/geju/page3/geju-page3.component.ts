/**
 * Created by deakin on 17-2-27.
 */
import { Component, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'geju-page3',
  templateUrl: './geju-page3.component.html',
  styleUrls: ['./geju-page3.component.css']
})
export class GejuPage3Component implements AfterViewInit {
  public id = 'geju-page3';
  public describeDataList = [
    {
      title: '1、我的格局，不同部门联系人快速划分',
      icons: [
        '&#xe60e;',
        '&#xe613;',
        '&#xe60d;',
        '&#xe617;',
        '&#xe611;'
      ],
      content: '快速查看组织信息，申请列表，邀请成员，添加部门，各部门内成员可分组设置方便管理。'
    },
    {
      title: '2、我的格局，不同部门联系人快速划分',
      icons: [
        '&#xe60e;',
        '&#xe613;',
        '&#xe60d;',
        '&#xe617;',
        '&#xe611;'
      ],
      content: '快速查看组织信息，申请列表，邀请成员，添加部门，各部门内成员可分组设置方便管理。'
    },
    {
      title: '3、我的格局，不同部门联系人快速划分',
      icons: [
        '&#xe60e;',
        '&#xe613;',
        '&#xe60d;',
        '&#xe617;',
        '&#xe611;'
      ],
      content: '快速查看组织信息，申请列表，邀请成员，添加部门，各部门内成员可分组设置方便管理。'
    }
  ];
  public curIndex = 0;

  public ngAfterViewInit(): void {
    this.initSwiper();
  };

  public initSwiper(): void {
    let swiper1 = this.initSubSwiper();
    let swiper2 = this.initMainSwiper();
    swiper1.params.control = swiper2;
    swiper2.params.control = swiper1;
  };

  public initSubSwiper() {
    let $this = this;
    return new Swiper('#' + this.id + ' .sub-swiper .swiper-container', {
      prevButton: '#' + this.id + ' .sub-swiper .swiper-button-prev',
      nextButton: '#' + this.id + ' .sub-swiper .swiper-button-next',
      slidesPerView: 2,
      spaceBetween: 20,
      autoHeight: true,
      observer: true,
      loop: true,
      onSlideChangeStart: (swiper) => {
        $this.curIndex = swiper.realIndex;
      }
    });
  };

  public initMainSwiper() {
    return new Swiper('#' + this.id + ' .main-swiper .swiper-container', {
      autoHeight: true,
      slidesPerView: 2,
      observer: true,
      loop: true
    });
  };
}
