/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.css']
})
export class AppHeaderComponent {
  @Input() public activeIndex;
  public items = [
    {
      title: "首页",
      url: "#"
    },
    {
      title: "案例展示",
      url: "#"
    },
    {
      title: "解决方案",
      url: "#"
    },
    {
      title: "开发流程",
      url: "#"
    },
    {
      title: "关于我们",
      url: "#"
    },
    {
      title: "格局",
      url: "#"
    }
  ];
  public tel = "020-37579981";

  public getItemStyle(index: number) {
    return {
      'text-main': this.activeIndex === index,
      'text-sub': this.activeIndex !== index
    }
  }
}
