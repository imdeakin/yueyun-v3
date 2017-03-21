/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'big-banner',
  templateUrl: 'big-banner.component.html',
  styleUrls: ['big-banner.component.css']
})
export class BigBannerComponent implements AfterViewInit {
  @Input() public slides;
  public swiper;
  public conId: string = 'big-banner-swiper';

  public ngAfterViewInit(): void {
    this.initSwiper();
  }

  public initSwiper(): void {
    this.swiper = new Swiper('#' + this.conId, {
      loop: true,
      autoplay: 3000,
      pagination: '#' + this.conId + ' .swiper-pagination',
      prevButton: '#' + this.conId + ' .swiper-button-prev',
      nextButton: '#' + this.conId + ' .swiper-button-next'
    });
  }
}
