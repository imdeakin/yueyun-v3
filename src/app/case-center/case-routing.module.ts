/**
 * Created by Deakin on 2017/3/23 0023.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CaseCenterComponent } from './case-center.component';
import { CaseContentComponent } from './case-content';

const caseRoutes: Routes = [
  {
    path: 'case-center',
    component: CaseCenterComponent,
    children: [
      {
        path: ':id',
        component: CaseContentComponent
      },
      {path: '', redirectTo: '/case-center/1', pathMatch: 'full'}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(caseRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CaseRoutingModule {
}
