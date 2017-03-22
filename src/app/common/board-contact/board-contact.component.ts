/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component } from '@angular/core';

import { ContactServer } from './contact-server';
import { User } from './user';

@Component({
  selector: 'board-contact',
  templateUrl: 'board-contact.component.html',
  styleUrls: ['board-contact.component.css']
})
export class BoardContactComponent {
  public hColor = 'white';
  public hTitle = '联系我们';

  public data = {
    addr: '广州市越秀区先烈中路75号穗丰大厦B座202',
    tel: '020-37579981',
    email: 's&m@gzyueyun.com',
    work: '周一~~周五 早上9:00~~下午18:00',
    guide: '地铁5号线区庄地铁站E出口往东山广场方向行走',
    vcode: 'assets/img/vcode.jpg'
  };

  // public user: User = {
  //   name: 'Deakin',
  //   phone: '15989029465',
  //   email: 'deakin@yeah.net',
  //   word: 'I\'m Deakin'
  // };

  public user: User = {
    name: '',
    phone: '',
    email: '',
    word: ''
  };

  constructor(private contactServer: ContactServer) {
  };

  public onSubmit(): void {
    this.contactServer.create(this.user);
  }
}
