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
    this.initAnimate();
  };

  public initAnimate(): void {
    let $this = this;
    let con = $('#' + this.id);
    let groups = con.find('.img-group');
    let imgCon = con.find('.imgs');
    let offsetTop = imgCon.offset().top;
    let windowHeight = window.outerHeight;
    let startOffsetTop = window.outerHeight / 5;
    let startScrollTop = offsetTop - windowHeight + startOffsetTop;

    window.addEventListener('scroll', () => {
      if (window.scrollY >= startScrollTop) {
        $this.animate(groups.eq(0), window.scrollY, 'top');
        $this.animate(groups.eq(1), window.scrollY);
      }
    }, false);
  }

  /**
   * 执行动画
   * @param ele 动画对象
   * @param scrollTop 滚动条距顶部的高度
   * @param direction 动画方向 'top': 向上移动; 默认 向下移动;
   */
  public animate(ele, scrollTop, direction?): void {
    let max = 50; // 最大移动距离
    let scrollHeight = window.outerHeight; // 滚动条滚动高度
    let speed = max / scrollHeight; // 相对滚动条滚动的速度
    ele.stop().animate({top: direction === 'top' ? -(scrollTop * speed) : scrollTop * speed});
  }
}
