/**
 * Created by Deakin on 2017/3/17 0017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'app-footer.component.html',
  styleUrls: ['app-footer.component.css']
})
export class AppFooterComponent {
  public toYear: number = new Date().getFullYear();
}
