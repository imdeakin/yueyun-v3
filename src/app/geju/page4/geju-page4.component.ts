/**
 * Created by deakin on 17-2-27.
 */
import { Component, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'geju-page4',
  templateUrl: './geju-page4.component.html',
  styleUrls: ['./geju-page4.component.css']
})
export class GejuPage4Component implements AfterViewInit {
  public id = 'geju-page4';
  public data = [
    {
      title: '名片管理',
      icon: '&#xe6b4;',
      img: '/assets/img/geju_board_bg_04.jpg',
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
      img: '/assets/img/geju_board_bg_05.jpg',
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
      img: '/assets/img/geju_board_bg_06.jpg',
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
  public swiper;

  public ngAfterViewInit(): void {
    this.initSwiper();
  }

  public switchCard(index): void {
    if (this.curIndex !== index) {
      let i = this.getSlideToIndex(this.swiper, this.curIndex, index);
      this.swiper.slideTo(i);
    }
  }

  public initSwiper(): void {
    let $this = this;
    this.swiper = new Swiper('#' + this.id + ' .swiper-container', {
      loop: true,
      onSlideChangeStart: (swiper) => {
        $this.curIndex = swiper.realIndex;
      }
    });
  }

  /**
   * 获取实际目标索引，保证swiper.slideTo()索引不会出错。
   * 这可以解决 loop 模式下 swiper.slideTo() 索引错乱的Bug。
   * @param swiper {Swiper}
   * @param curIndex {number} 当前索引 loop模式下是swiper.realIndex的值
   * @param toIndex {number} 目标索引
   * @returns {number} 实际目标索引
   */
  public getSlideToIndex(swiper, curIndex: number, toIndex: number) {
    let a: number = toIndex - curIndex; // 两页索引差
    let i: number = swiper.activeIndex + a; // 实际目标索引
    return i;
  }
}
