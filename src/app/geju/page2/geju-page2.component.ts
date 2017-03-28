/**
 * Created by deakin on 17-2-27.
 */
import { Component, AfterViewInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'geju-page2',
  templateUrl: './geju-page2.component.html',
  styleUrls: ['./geju-page2.component.css']
})
export class GejuPage2Component implements AfterViewInit {
  public id = 'geju-page2';

  public ngAfterViewInit(): void {
    let con = $('#' + this.id);
    let groups = $('#' + this.id + ' .img-group');
    console.log(window.outerHeight);

    groups.each(function () {
      console.log('offsetTop: ' + $(this).offset().top);
      console.log('scrollTop: ' + $(this).scrollTop());
    });

    window.addEventListener('scroll', () => {
      console.log('scrollY: ' + window.scrollY);
      groups.eq(0).each(function () {
        console.log('offsetTop: ' + $(this).offset().top);
        console.log('scrollTop: ' + $(this).scrollTop());
      });
    }, false);
  };
}
