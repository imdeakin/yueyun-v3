/**
 * Created by deakin on 17-2-27.
 */
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { BigBannerServer } from '../common/big-banner/big-banner-server';

declare let $: any;

@Component({
  selector: 'app-wrapper',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public bannerSlides = [
    {image: 'assets/img/banner_01.jpg'},
    {image: 'assets/img/banner_01.jpg'},
    {image: 'assets/img/banner_01.jpg'}
  ];

  constructor(private bigBannerServer: BigBannerServer) {
  }

  public ngAfterViewInit(): void {
    $('#app-header .nav').onePageNav();
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
