import { Component, OnInit } from '@angular/core';
import { ParentLevelService } from './parent-level-service';
import { ParentLevelServiceService } from './parent-level-service.service';


@Component({
  selector: 'child-level-service',
  templateUrl: './child-level-services.component.html',
  styleUrls: ['./app.component.css']
})

export class ChildLevelServices implements OnInit {
  title = 'TEST';
  parent_level_services: ParentLevelService[] = [];

  constructor(private parentLevelServiceService: ParentLevelServiceService) { }

  ngOnInit(): void {
    this.parentLevelServiceService.getParentLevelServices()
      .then(parent_level_services => this.parent_level_services = parent_level_services.slice(1, 5));
  }

}
