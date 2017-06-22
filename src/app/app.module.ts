import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import {AppRoutingModule}                   from './app-routing.module';
import {AppComponent}                       from './app.component';
import {CategoriesFor211Component}          from "./211_services/211_service_categories/categories-for-211.component";
import {ReferNet211Service}                 from "./211_services/refer-net-211-services.service";
import {SubcategoriesFor211Component}       from "./211_services/211_service_subcategories/subcategories-for-211.component";
import {SubcategoriLinksFor211Component}    from './211_services/211_service_subcategory_links/subcategory-links-for-211.component';
import {Globals}                            from "./globals";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CategoriesFor211Component,
    SubcategoriesFor211Component,
    SubcategoriLinksFor211Component,
  ],
  providers: [ReferNet211Service, Globals],
  bootstrap: [AppComponent]
})


export class AppModule { }
