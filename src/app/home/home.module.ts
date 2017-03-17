/**
 * Created by deakin on 17-2-27.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { AppHeaderComponent } from '../common/app-header';
import { AppFooterComponent } from '../common/app-footer';

import { BigBannerComponent } from '../common/big-banner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    BigBannerComponent
  ],
  providers: [],
  exports: [HomeComponent]
})
export class HomeModule {
}
