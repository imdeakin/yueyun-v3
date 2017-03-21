/**
 * Created by Deakin on 2017/3/20 0020.
 */
import { Injectable } from '@angular/core';

import { SchemeItemData } from './scheme-item-data';

@Injectable()
export class SchemeServer {
  public schemeData: SchemeItemData[] = [
    {
      icon: '&#xe69a;',
      bg: 'assets/img/scheme_bg_01.jpg',
      title: '智能家居',
      cover: '#666699'
    },
    {
      icon: '&#xe640;',
      bg: 'assets/img/scheme_bg_02.jpg',
      title: '智能硬件',
      cover: '#ff9999'
    },
    {
      icon: '&#xe627;',
      bg: 'assets/img/scheme_bg_03.jpg',
      title: '微商城',
      cover: '#cc9900'
    },
    {
      icon: '&#xe601;',
      bg: 'assets/img/scheme_bg_04.jpg',
      title: '电商',
      cover: '#66cc66'
    },
    {
      icon: '&#xe626;',
      bg: 'assets/img/scheme_bg_05.jpg',
      title: '社交',
      cover: '#339933'
    },
    {
      icon: '&#xe605;',
      bg: 'assets/img/scheme_bg_06.jpg',
      title: '医疗',
      cover: '#336699'
    },
    {
      icon: '&#xe631;',
      bg: 'assets/img/scheme_bg_07.jpg',
      title: '直播',
      cover: '#cc6633'
    },
    {
      icon: '&#xe603;',
      bg: 'assets/img/scheme_bg_08.jpg',
      title: '企业',
      cover: '#33ccff'
    },
    {
      icon: '&#xe730;',
      bg: 'assets/img/scheme_bg_09.jpg',
      title: '物流',
      cover: '#cc9900'
    },
    {
      icon: '&#xe679;',
      bg: 'assets/img/scheme_bg_10.jpg',
      title: '教育',
      cover: '#9966cc'
    },
    {
      icon: '&#xe641;',
      bg: 'assets/img/scheme_bg_11.jpg',
      title: '图像',
      cover: '#66ccff'
    },
    {
      icon: '&#xe61c;',
      bg: 'assets/img/scheme_bg_12.jpg',
      title: '房地产',
      cover: '#9999cc'
    }
  ];

  public getSchemeData(): SchemeItemData[] {
    return this.schemeData;
  }
}
