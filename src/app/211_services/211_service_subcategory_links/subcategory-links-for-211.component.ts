import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute }             from '@angular/router';
import { Location }                   from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SubcategoryLinkFor211 }    from './subcategory-link-for-211';
import { ReferNet211Service }   from '../refer-net-211-services.service';


@Component({
  selector: 'child-level-services',
  templateUrl: './subcategory-links-for-211.component.html',
  styleUrls: ['../../app.component.css']
})

export class SubcategoriLinksFor211Component implements OnInit {
  constructor(
    private referNet211ServicesService: ReferNet211Service,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input() selected_category_id: number;
  selected_subcategory: SubcategoryLinkFor211;
  subcategory_links: SubcategoryLinkFor211[] = [];

  ngOnInit(): void {
    this.selected_category_id = +this.route.snapshot.params['Category_ID'];

    if(this.selected_category_id >- -1){
      this.referNet211ServicesService.getSubcategoryLinkForSubcategoryId(this.selected_category_id).then(subcat_linkss => this.subcategory_links = subcat_linkss);
    }
  }

  onSelect(subcategory: SubcategoryLinkFor211): void {
    this.selected_subcategory = subcategory;
  }

  goBack(): void {
    this.location.back();
  }

}
