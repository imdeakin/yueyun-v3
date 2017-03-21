/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'board-process',
  templateUrl: 'board-process.component.html',
  styleUrls: ['board-process.component.css']
})
export class BoardProcessComponent {
  public hColor = "white";
  public hTitle = '开发流程';

  public data = {
    addr: '广州市越秀区先烈中路75号穗丰大厦B座202',
    tel: '020-37579981',
    email: 's&m@gzyueyun.com',
    work: '周一~~周五 早上9:00~~下午18:00',
    guide: '地铁5号线区庄地铁站E出口往东山广场方向行走',
    vcode: 'assets/img/vcode.jpg'
  };
}
