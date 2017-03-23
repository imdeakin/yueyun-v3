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
import { CaseListComponent } from '../common/case-list';

// 解决方案
import { BoardSchemeComponent } from '../common/board-scheme';
import { SchemeItemComponent } from '../common/scheme-item';

// 关于我们
import { BoardAboutComponent } from '../common/board-About';
import { AboutItemComponent } from '../common/about-item';

// 联系我们
import { BoardContactComponent } from '../common/board-contact';

// 开发流程
import { BoardProcessComponent } from '../common/board-process';

// 悬浮按钮
import { FloatBtnsComponent } from '../common/float-btns';

// 服务
import { ServiceServer } from '../common/service-item/service-server';
import { CaseServer } from '../common/case-item/case-server';
import { SchemeServer } from '../common/scheme-item/scheme-server';
import { AboutServer } from '../common/about-item/about-server';
import { ContactServer } from '../common/board-contact/contact-server';
import { BigBannerServer } from '../common/big-banner/big-banner-server';

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
    CaseListComponent,
    CaseNavComponent,
    CaseItemComponent,

    BoardSchemeComponent,
    SchemeItemComponent,

    BoardAboutComponent,
    AboutItemComponent,

    BoardContactComponent,

    BoardProcessComponent,

    FloatBtnsComponent
  ],
  providers: [
    ServiceServer,
    CaseServer,
    SchemeServer,
    AboutServer,
    ContactServer,
    BigBannerServer
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
