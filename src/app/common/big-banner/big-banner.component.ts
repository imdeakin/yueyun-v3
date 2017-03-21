/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input, AfterViewChecked } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'big-banner',
  templateUrl: 'big-banner.component.html',
  styleUrls: ['big-banner.component.css']
})
export class BigBannerComponent implements AfterViewChecked {
  @Input() public slides;
  public curSlides;
  public swiper;
  public conId: string = 'big-banner-swiper';

  public ngAfterViewChecked(): void {
    if (this.slides !== this.curSlides) {
      this.curSlides = this.slides;
      this.initSwiper();
    }
  }

  public initSwiper(): void {
    console.log('initSwiper');
    this.swiper = new Swiper('#' + this.conId, {
      loop: true,
      autoplay: 3000,
      pagination: '#' + this.conId + ' .swiper-pagination',
      prevButton: '#' + this.conId + ' .swiper-button-prev',
      nextButton: '#' + this.conId + ' .swiper-button-next'
    });
  }
}
