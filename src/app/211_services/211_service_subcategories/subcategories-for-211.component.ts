import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute }             from '@angular/router';
import { Location }                   from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SubcategoryFor211 }    from './subcategory-for-211';
import { ReferNet211Service }   from '../refer-net-211-services.service';


@Component({
  selector: 'subcategories-for-211',
  templateUrl: './subcategories-for-211.component.html',
  styleUrls: ['../../app.component.css']
})

export class SubcategoriesFor211Component implements OnInit {
  constructor(
    private referNet211ServicesService: ReferNet211Service,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input() selected_category_name: string;
  selected_subcategory: SubcategoryFor211;
  subcategories: SubcategoryFor211[] = [];

  ngOnInit(): void {
    this.selected_category_name = this.route.snapshot.params['Category_Name'];

    if(this.selected_category_name != ''){
      this.referNet211ServicesService.getSubcategoryForCategoryName(this.selected_category_name).then(subcats => this.subcategories = subcats);
    }
  }

  onSelect(subcategory: SubcategoryFor211): void {
    this.selected_subcategory = subcategory;
  }

  goBack(): void {
    this.location.back();
  }

}
