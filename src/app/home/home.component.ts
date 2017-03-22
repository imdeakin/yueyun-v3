/**
 * Created by deakin on 17-2-27.
 */
import { Component, OnInit } from '@angular/core';

import { BigBannerServer } from '../common/big-banner/big-banner-server';

@Component({
  selector: 'app-wrapper',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public bannerSlides = [
    {image: 'assets/img/banner_01.jpg'},
    {image: 'assets/img/banner_01.jpg'},
    {image: 'assets/img/banner_01.jpg'}
  ];

  constructor(private bigBannerServer: BigBannerServer) {
  }

  public ngOnInit(): void {
    this.getBannerList();
  }

  public getBannerList() {
    let $this = this;
    this.bigBannerServer.getBannerList((list) => {
      $this.bannerSlides = list;
    });
  }
}
