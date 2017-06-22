import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';
import {AppComponent} from './app.component';
import {ParentLevelServiceDetailsComponent} from "./parent-level-service-details.component";
import {ParentLevelServices} from "./parent-level-services.component";
import {ReferNet211Service} from "./refer-net-211-services.service";
import {ChildLevelServices} from "./child-level-services.component";
import {Globals} from "./globals";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ParentLevelServices,
    ParentLevelServiceDetailsComponent,
    ChildLevelServices,
  ],
  providers: [ReferNet211Service, Globals],
  bootstrap: [AppComponent]
})


export class AppModule { }
