/**
 * Created by Deakin on 2017/3/23 0023.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';
const heroesRoutes: Routes = [
  {path: 'case/:id', component: HeroDetailComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CaseRoutingModule {
}
