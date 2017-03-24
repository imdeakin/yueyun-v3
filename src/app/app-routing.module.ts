/**
 * Created by Deakin on 2017/3/23 0023.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './home';
import { CaseDetailComponent } from './case-detail';
import { SchemeDetailComponent } from './scheme-detail';
import { SchemeCenterComponent } from './scheme-center';
import { AboutDetailComponent } from './about-detail';
import { GejuComponent } from './geju';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'case-detail/:id', component: CaseDetailComponent},
  {path: 'scheme-detail/:id', component: SchemeDetailComponent},
  {path: 'scheme-center', component: SchemeCenterComponent},
  {path: 'about', component: AboutDetailComponent},
  {path: 'geju', component: GejuComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  // {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
