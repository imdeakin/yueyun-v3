/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, OnInit } from '@angular/core';

import { SchemeItemData } from '../scheme-item/scheme-item-data';
import { SchemeServer } from '../scheme-item/scheme-server';

@Component({
  selector: 'board-scheme',
  templateUrl: 'board-scheme.component.html',
  styleUrls: ['board-scheme.component.css']
})
export class BoardSchemeComponent implements OnInit {
  public hColor;
  public hTitle = '解决方案';

  public schemeList: SchemeItemData[];

  constructor(private schemeServer: SchemeServer) {
  }

  public ngOnInit(): void {
    this.schemeList = this.schemeServer.getSchemeData();
  }
}
