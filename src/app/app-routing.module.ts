/**
 * Created by mmaranda on 6/22/17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CategoriesFor211Component}          from './211_services/211_service_categories/categories-for-211.component';
import {SubcategoriesFor211Component}       from './211_services/211_service_subcategories/subcategories-for-211.component';
import {SubcategoryLinksFor211Component}    from './211_services/211_service_subcategory_links/subcategory-links-for-211.component';
import {MatchListsFor211Component}          from './211_services/211_services_match_lists/match-lists-for-211.component';
import {HelpMeFind}                         from "./help_me_find/help-me-find.component";

const routes: Routes = [
  { path: '', redirectTo: '/Landing', pathMatch: 'full' },
  { path: '211Categories',                    component: CategoriesFor211Component },
  { path: '211Subcategories/:Category_Name',  component: SubcategoriesFor211Component },
  { path: '211SubcategoryLinks/:Category_ID',  component: SubcategoryLinksFor211Component },
  { path: '211MatchLists/:name', component: MatchListsFor211Component },
  { path: 'Landing', component: HelpMeFind}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
