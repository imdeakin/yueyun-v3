/**
 * Created by deakin on 17-2-27.
 */
import { Component, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'geju-page3',
  templateUrl: './geju-page3.component.html',
  styleUrls: ['./geju-page3.component.css']
})
export class GejuPage3Component implements AfterViewInit {
  public id = 'geju-page3';

  public ngAfterViewInit(): void {
    this.initSwiper();
  }

  public initSwiper(): void {
    let swiper1 = this.initSubSwiper();
    let swiper2 = this.initMainSwiper();
    swiper1.params.control = swiper2;
    swiper2.params.control = swiper1;
  }

  public initSubSwiper() {
    return new Swiper('#' + this.id + ' .sub-swiper .swiper-container', {
      prevButton: '#' + this.id + ' .sub-swiper .swiper-button-prev',
      nextButton: '#' + this.id + ' .sub-swiper .swiper-button-next',
      slidesPerView: 2,
      spaceBetween: 20,
      autoHeight: true,
      observer:true,
      loop: true
    });
  }

  public initMainSwiper() {
    return new Swiper('#' + this.id + ' .main-swiper .swiper-container', {
      autoHeight: true,
      slidesPerView: 2,
      observer:true,
      loop: true
    });
  }
}
