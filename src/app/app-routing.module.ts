/**
 * Created by mmaranda on 6/22/17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CategoriesFor211Component}      from './211_services/categories-for-211.component';
import {SubcategoriesFor211Component}   from './211_services/subcategories-for-211.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '211Categories',                    component: CategoriesFor211Component },
  { path: '211Subcategories/:Category_Name',  component: SubcategoriesFor211Component },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
