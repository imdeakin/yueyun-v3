/**
 * Created by deakin on 17-2-27.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public bannerSlides = [
    {img: 'assets/img/banner_01.jpg'},
    {img: 'assets/img/banner_01.jpg'},
    {img: 'assets/img/banner_01.jpg'}
  ];
}
