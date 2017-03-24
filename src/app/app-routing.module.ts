/**
 * Created by Deakin on 2017/3/23 0023.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './home';
// import { CaseCenterComponent } from './case-center';
import { SchemeCenterComponent } from './scheme-center';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: 'case-center', component: CaseCenterComponent},
  {path: 'scheme-center', component: SchemeCenterComponent},
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
