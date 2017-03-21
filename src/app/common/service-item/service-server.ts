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
      describe: 'Android、iOS系统开发<br/>满足移动APP多平台开发需求'
    },
    {
      icon: '&#xe655;',
      bg: 'assets/img/service_bg_02.jpg',
      title: '定制开发',
      describe: '根据需求，为您”量身定制“的个性化的解决方案<br/>从根本上为您和您的企业带来革命性的改变'
    },
    {
      icon: '&#xe63b;',
      bg: 'assets/img/service_bg_03.jpg',
      title: '微信定制开发',
      describe: '从企业的需求出发,为企业量身定制<br/>微信公众号二次开发、微商城定制、应用号小程序开发'
    },
    {
      icon: '&#xe607;',
      bg: 'assets/img/service_bg_04.jpg',
      title: 'O2O移动电商',
      describe: '利用手机、IPDA等无线终端进行的O2O的电子商务<br/>实现随时随地、线上下的购物与交易'
    },
    {
      icon: '&#xe609;',
      bg: 'assets/img/service_bg_05.jpg',
      title: '物流网定制化开发',
      describe: '利用手机、IPDA等无线终端进行的O2O的电子商务<br/>实现随时随地、线上下的购物与交易'
    },
    {
      icon: '&#xe608;',
      bg: 'assets/img/service_bg_06.jpg',
      title: '云服务',
      describe: '利用手机、IPDA等无线终端进行的O2O的电子商务<br/>实现随时随地、线上下的购物与交易'
    }
  ];

  public getServiceData(): ServiceItemData[] {
    return this.serviceData;
  }
}
