/**
 * Created by Deakin on 2017/3/20 0020.
 */
import { Injectable } from '@angular/core';

import { ServiceItemData } from './service-item-data';

@Injectable()
export class ServiceServer {
  public serviceData: ServiceItemData[] = [
    {
      icon: '&#xe6a1;',
      bg: 'assets/img/service_bg_01.jpg',
      title: '移动app定制开发',
      describe: 'Android、iOS系统软件开发<br/>满足移动APP多平台开发需求'
    },
    {
      icon: '&#xe655;',
      bg: 'assets/img/service_bg_02.jpg',
      title: '网站定制开发',
      describe: '根据需求，为您”量身定制“的个性化的解决方案<br/>从根本上为您和您的企业带来革命性的改变'
    },
    {
      icon: '&#xe63b;',
      bg: 'assets/img/service_bg_03.jpg',
      title: '微信定制开发',
      describe: '从企业的需求根本出发,为企业量身定制<br/>微信公众号二次开发、微商城定制、小程序开发'
    },
    {
      icon: '&#xe607;',
      bg: 'assets/img/service_bg_04.jpg',
      title: 'O2O移动电商',
      describe: '利用手机、平板等无线终端进行的O2O的电子商务<br/>实现随时随地、线上线下的购物与交易'
    },
    {
      icon: '&#xe642;',
      bg: 'assets/img/service_bg_05.jpg',
      title: '物联网软件开发',
      describe: '为客户快速开发出安全稳定的智能硬件的软件,<br/>并为企业提供安全可靠的设备云服务接入。'
    },
    {
      icon: '&#xe608;',
      bg: 'assets/img/service_bg_06.jpg',
      title: '云服务',
      describe: '基于互联网的相关服务设备的增加、使用和交付购置，<br/>提供涉及通过互联网来提供动态易扩展计算的资源。'
    }
  ];

  public getServiceData(): ServiceItemData[] {
    return this.serviceData;
  }
}
