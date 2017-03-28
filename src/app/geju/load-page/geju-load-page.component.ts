/**
 * Created by deakin on 17-2-27.
 */
import { Component, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

declare let $: any;

import { ThreeWave } from './three-wave';

@Component({
  templateUrl: './geju-load-page.component.html',
  styleUrls: ['./geju-load-page.component.css']
})
export class GejuLoadPageComponent implements AfterViewInit {
  public id: string = 'load-page';
  public threeWave: ThreeWave = new ThreeWave();

  constructor(private router: Router) {
  }

  public ngAfterViewInit(): void {
    let $this = this;
    this.threeWave.init(this.id);
    setTimeout(() => {
      $this.threeWave.destroy();
      $this.router.navigate(['/geju-home']);
    }, 3000);
  }
}
