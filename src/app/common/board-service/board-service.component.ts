/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, OnInit } from '@angular/core';

import { ServiceItemData } from '../service-item/service-item-data';
import { ServiceServer } from '../service-item/service-server';

@Component({
  selector: 'board-service',
  templateUrl: 'board-service.component.html',
  styleUrls: ['board-service.component.css']
})
export class BoardServiceComponent implements OnInit {
  public hColor;
  public hTitle = '我们能做什么';

  public serviceList: ServiceItemData[];

  constructor(private serviceServer: ServiceServer) {
  }

  public ngOnInit(): void {
    this.serviceList = this.serviceServer.getServiceData();
  }
}
