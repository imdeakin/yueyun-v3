/**
 * Created by Deakin on 2017/3/22 0022.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ScrollToTop {
  private defaults = {
    showTop: 300,
    speed: 500,
  };
  private options;
  private btn;

  public init(query, options?): void {
    this.options = this.extend(this.defaults, options);
    this.btn = document.querySelector(query);
    this.updateVisibleStatus();
    this.initWindow();
    this.initBtn();
  }

  public extend(defaults, options) {
    for (let key in options) {
      if (typeof options[key] !== 'undefined') {
        defaults[key] = options[key];
      }
    }
    return defaults;
  }

  private updateVisibleStatus() {
    if (window.scrollY >= this.options.showTop) {
      this.btn.style.display = 'block';
    } else {
      this.btn.style.display = 'none';
    }
  }

  private initBtn() {
    let $this = this;
    this.btn.onclick = () => {
      let top = window.scrollY;
      let delay = 10;
      let a = top / ($this.options.speed / delay);
      let id = setInterval(() => {
        top -= a;
        window.scrollTo(0, top);
        if (top <= 0) {
          clearInterval(id);
        }
      }, delay);
    };
  }

  private initWindow() {
    let $this = this;
    window.onscroll = () => {
      $this.updateVisibleStatus();
    };
  }
}
