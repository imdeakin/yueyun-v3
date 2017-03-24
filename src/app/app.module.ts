import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// custom module
// import { HomeModule } from './home';

import { ApiServer } from './serv/api-server';

import { AppComponent }  from './app.component';

import { ScrollToTop } from './plugins/scroll-to-top';

import { AppHeaderComponent } from './common/app-header';
import { AppFooterComponent } from './common/app-footer';

import { BigBannerComponent } from './common/big-banner';
import { BoardHeaderComponent } from './common/board-header';

// 提供服务
import { BoardServiceComponent } from './common/board-service';
import { ServiceItemComponent } from './common/service-item';

// 成功案例
import { BoardCaseComponent } from './common/board-case';
import { CaseNavComponent } from './common/case-nav';
import { CaseItemComponent } from './common/case-item';
import { CaseListComponent } from './common/case-list';

// 解决方案
import { BoardSchemeComponent } from './common/board-scheme';
import { SchemeItemComponent } from './common/scheme-item';

// 关于我们
import { BoardAboutComponent } from './common/board-About';
import { AboutItemComponent } from './common/about-item';

// 联系我们
import { BoardContactComponent } from './common/board-contact';

// 开发流程
import { BoardProcessComponent } from './common/board-process';

// 悬浮按钮
import { FloatBtnsComponent } from './common/float-btns';

// 服务
import { ServiceServer } from './common/service-item/service-server';
import { CaseServer } from './common/case-item/case-server';
import { SchemeServer } from './common/scheme-item/scheme-server';
import { AboutServer } from './common/about-item/about-server';
import { ContactServer } from './common/board-contact/contact-server';
import { BigBannerServer } from './common/big-banner/big-banner-server';

// 页面
import { HomeComponent } from './home';
import { CaseCenterComponent } from './case-center';
// import { CaseListComponent2 } from './case-center/case-list';
import { CaseListServer } from './case-center/case-list-server';
import { CaseContentComponent } from './case-center/case-content';
import { SchemeCenterComponent } from './scheme-center';

// 路由
import { AppRoutingModule } from './app-routing.module';
import { CaseRoutingModule } from './case-center/case-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    CaseRoutingModule
  ],
  providers: [
    ApiServer,
    ScrollToTop,
    ServiceServer,
    CaseServer,
    SchemeServer,
    AboutServer,
    ContactServer,
    BigBannerServer,
    CaseListServer
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CaseCenterComponent,
    CaseContentComponent,
    SchemeCenterComponent,

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
  bootstrap: [AppComponent]
})
export class AppModule {
}
