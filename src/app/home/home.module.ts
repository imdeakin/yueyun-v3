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
import { BoardHeaderComponent } from '../common/board-header';

// 提供服务
import { BoardServiceComponent } from '../common/board-service';
import { ServiceItemComponent } from '../common/service-item';

// 成功案例
import { BoardCaseComponent } from '../common/board-case';
import { CaseNavComponent } from '../common/case-nav';
import { CaseItemComponent } from '../common/case-item';

// 解决方案
import { BoardSchemeComponent } from '../common/board-scheme';
import { SchemeItemComponent } from '../common/scheme-item';

// 服务
import { ServiceServer } from '../common/service-item/service-server';
import { CaseServer } from '../common/case-item/case-server';
import { SchemeServer } from '../common/scheme-item/scheme-server';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    BigBannerComponent,
    BoardHeaderComponent,
    BoardServiceComponent,
    ServiceItemComponent,
    BoardCaseComponent,
    CaseNavComponent,
    CaseItemComponent,
    BoardSchemeComponent,
    SchemeItemComponent
  ],
  providers: [
    ServiceServer,
    CaseServer,
    SchemeServer
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
