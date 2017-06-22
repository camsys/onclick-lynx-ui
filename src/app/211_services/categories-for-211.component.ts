import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { CategoryFor211 } from './category-for-211';
import { ReferNet211Service } from './refer-net-211-services.service';


@Component({
  selector: 'my-parent-level-services',
  templateUrl: './categories-for-211.component.html',
  styleUrls: ['../app.component.css']
})
export class CategoriesFor211Component implements OnInit {
  title = 'Lynx';

  constructor(private referNet211ServicesService: ReferNet211Service) { }

  selected_category: CategoryFor211;
  categories: CategoryFor211[];

  onSelect(category: CategoryFor211): void {
    this.selected_category = category;
  }

  getParentLevelServices(): void {
    this.referNet211ServicesService.getCategoriesFor211Services().then(parent_services => this.categories = parent_services);
  }

  ngOnInit(): void {
    this.getParentLevelServices();
  }
}





