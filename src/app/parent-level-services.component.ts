import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ParentLevelService } from './parent-level-service';
import { ReferNet211Service } from './refer-net-211-services.service';


@Component({
  selector: 'my-parent-level-services',
  templateUrl: './parent-level-services.component.html',
  styleUrls: ['./app.component.css']
})
export class ParentLevelServices implements OnInit {
  title = 'Lynx';

  constructor(private referNet211ServicesService: ReferNet211Service) { }

  selected_parent_level_service: ParentLevelService;
  parent_level_services: ParentLevelService[];

  onSelect(parent_level_service: ParentLevelService): void {
    this.selected_parent_level_service = parent_level_service;
  }

  getParentLevelServices(): void {
    this.referNet211ServicesService.getParentLevelServices().then(parent_services => this.parent_level_services = parent_services);
  }

  ngOnInit(): void {
    this.getParentLevelServices();
  }
}





