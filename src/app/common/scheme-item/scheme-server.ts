/**
 * Created by Deakin on 2017/3/20 0020.
 */
import { Injectable } from '@angular/core';

import { SchemeItemData } from './scheme-item-data';

@Injectable()
export class SchemeServer {
  public schemeData: SchemeItemData[] = [
    {
      id: '1',
      icon: '&#xe69a;',
      bg: 'assets/img/scheme_bg_01.png',
      title: '智能家居',
      cover: '#666699'
    },
    {
      id: '2',
      icon: '&#xe640;',
      bg: 'assets/img/scheme_bg_02.png',
      title: '智能硬件',
      cover: '#ff9999'
    },
    {
      id: '3',
      icon: '&#xe627;',
      bg: 'assets/img/scheme_bg_03.png',
      title: '微商城',
      cover: '#cc9900'
    },
    {
      id: '4',
      icon: '&#xe601;',
      bg: 'assets/img/scheme_bg_04.png',
      title: '电商',
      cover: '#66cc66'
    },
    {
      id: '5',
      icon: '&#xe626;',
      bg: 'assets/img/scheme_bg_05.png',
      title: '社交',
      cover: '#339933'
    },
    {
      id: '6',
      icon: '&#xe605;',
      bg: 'assets/img/scheme_bg_06.png',
      title: '医疗',
      cover: '#336699'
    },
    {
      id: '7',
      icon: '&#xe631;',
      bg: 'assets/img/scheme_bg_07.png',
      title: '直播',
      cover: '#cc6633'
    },
    {
      id: '8',
      icon: '&#xe603;',
      bg: 'assets/img/scheme_bg_08.png',
      title: '企业',
      cover: '#33ccff'
    },
    {
      id: '9',
      icon: '&#xe730;',
      bg: 'assets/img/scheme_bg_09.png',
      title: '物流',
      cover: '#cc9900'
    },
    {
      id: '10',
      icon: '&#xe679;',
      bg: 'assets/img/scheme_bg_10.png',
      title: '教育',
      cover: '#9966cc'
    },
    {
      id: '11',
      icon: '&#xe641;',
      bg: 'assets/img/scheme_bg_11.png',
      title: '图像',
      cover: '#66ccff'
    },
    {
      id: '12',
      icon: '&#xe61c;',
      bg: 'assets/img/scheme_bg_12.png',
      title: '房地产',
      cover: '#9999cc'
    }
  ];

  public getSchemeData(): SchemeItemData[] {
    return this.schemeData;
  }
}
