/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input, AfterViewChecked } from '@angular/core';

import { ApiConfig } from '../../serv/api-config';

import Swiper from 'swiper';

import { boardIds } from '../../home/board-ids';

@Component({
  selector: 'big-banner',
  templateUrl: 'big-banner.component.html',
  styleUrls: ['big-banner.component.css']
})
export class BigBannerComponent implements AfterViewChecked {
  @Input() public slides;
  public curSlides;
  public swiper;
  public conId: string = boardIds.home;
  public ApiConfig = ApiConfig;

  public ngAfterViewChecked(): void {
    if (this.slides !== this.curSlides) {
      this.curSlides = this.slides;
      this.initSwiper();
    }
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
