import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';



import {AppComponent} from './app.component';
import {ParentLevelServiceDetailsComponent} from "./parent-level-service-details.component";
import {ParentLevelServices} from "./parent-level-services.component";
import {ParentLevelServiceService} from "./parent-level-service.service";
import {ChildLevelServices} from "./child-level-services.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: ParentLevelServices
      },
      {
        path: 'child',
        component: ChildLevelServices
      }
    ])
  ],
  declarations: [
    AppComponent,
    ParentLevelServices,
    ParentLevelServiceDetailsComponent,
    ChildLevelServices
  ],
  providers: [ParentLevelServiceService],
  bootstrap: [AppComponent]
})


export class AppModule { }
