/**
 * Created by mmaranda on 6/22/17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentLevelServices }   from './parent-level-services.component';
import { ChildLevelServices }      from './child-level-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '211Categories',                    component: ParentLevelServices },
  { path: '211Subcategories/:Category_Name',  component: ChildLevelServices },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
