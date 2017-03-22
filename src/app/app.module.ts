import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// custom module
import { HomeModule } from './home';

import { ApiServer } from './serv/api-server';

import { AppComponent }  from './app.component';

import { ScrollToTop } from './plugins/scroll-to-top';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    HttpModule
  ],
  providers: [
    ApiServer,
    ScrollToTop
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
