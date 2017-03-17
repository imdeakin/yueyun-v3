/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "big-banner",
  templateUrl: "big-banner.component.html",
  styleUrls: ["big-banner.component.css"]
})
export class BigBannerComponent implements OnInit {
  @Input() public slides;
}
