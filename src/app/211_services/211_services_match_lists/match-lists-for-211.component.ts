import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute }             from '@angular/router';
import { Location }                   from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { MatchListFor211 }      from './match-list-for-211';
import { ReferNet211Service }   from '../refer-net-211-services.service';
import { County }               from './county';
import { COUNTIES }             from './static-county-list';

@Component({
  selector: 'match-lists-for-211',
  templateUrl: './match-lists-for-211.component.html',
  styleUrls: ['../../app.component.css']
})

export class MatchListsFor211Component implements OnInit {
  constructor(
    private referNet211ServicesService: ReferNet211Service,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input() link_name: string;
  selected_match_lists: MatchListFor211;
  match_lists: MatchListFor211[] = [];

  ngOnInit(): void {
    this.link_name = this.route.snapshot.params['name'];

    for (let county of COUNTIES) {

      if (this.link_name != '') {
        this.referNet211ServicesService.getMatchListForSubcategoryLinkNameAndCountyCode(this.link_name, county.County_Code).then(matches => this.match_lists = matches);
      }
    }
  }

  onSelect(match_list: MatchListFor211): void {
    this.selected_match_lists = match_list;
  }

  goBack(): void {
    this.location.back();
  }

}
