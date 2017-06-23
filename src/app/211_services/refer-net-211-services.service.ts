import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {CategoryFor211}           from './211_service_categories/category-for-211';
import {SubcategoryFor211}        from './211_service_subcategories/subcategory-for-211';
import {SubcategoryLinkFor211}   from './211_service_subcategory_links/subcategory-link-for-211'
import {MatchListFor211}   from './211_services_match_lists/match-list-for-211'

@Injectable()
export class ReferNet211Service {

  private refernetUrl = 'http://www.referweb.net/mws/service.asmx/';

  constructor(private http: Http) {
  }

  api_key: string = 'KIXUUKWX';
  state: string = 'FLORIDA';

  //We are using the promise format over the observable format because we are performing a simple get request and not doing much with the data beyond displaying it.
  //We expect reasonable quick responses from the server and won't likely run into a request-cancel-new-request sequence.
  getCategoriesFor211Services(): Promise<CategoryFor211[]> {
    var uri: string = encodeURI(this.refernetUrl+'Category?API_KEY='+this.api_key+'&DeviceID=');

    return this.http.get(uri)
      .toPromise()
      .then(response => response.text())
      .then(str => this.stripAwayXml(str))
      .then(jsonable => JSON.parse(jsonable) as CategoryFor211)
      .catch(this.handleError);
  }

  getSubcategoryForCategoryName(categoryName: string): Promise<SubcategoryFor211[]> {
    var uri: string = encodeURI(this.refernetUrl+'Sub_Category?API_KEY='+this.api_key+'&category_name='+categoryName+'&DeviceID=');

    return this.http.get(uri)
      .toPromise()
      .then(response => response.text())
      // .then(r => console.log(r))
      .then(str => this.stripAwayXml(str))
      .then(jsonable => JSON.parse(jsonable) as SubcategoryFor211)
      .catch(this.handleError);
  }

  getSubcategoryLinkForSubcategoryId(categoryId: number): Promise<SubcategoryLinkFor211[]>{

    var uri: string = encodeURI(this.refernetUrl+'SubCat_Links?API_KEY='+this.api_key+'&category_id='+categoryId+'&DeviceID=');

    return this.http.get(uri)
      .toPromise()
      .then(response => response.text())
      .then(str => this.stripAwayXml(str))
      .then(jsonable => JSON.parse(jsonable) as SubcategoryFor211)
      .catch(this.handleError);
  }

  // getMatchListForSubcategoryLinkNameAndCounty(subcategroyLinkName: string, countyId: number): Promise<SubcategoryLinkFor211[]>{
  getMatchListForSubcategoryLinkNameAndCountyCode(subcategroyLinkName: string, countyCode: number): Promise<MatchListFor211[]>{

    var uri: string = encodeURI(this.refernetUrl+'MatchList?API_KEY='+this.api_key+'&zip='+'&searchterm='+subcategroyLinkName+'&county_id='+countyCode+'&DeviceID=');

    console.log(uri);

    return this.http.get(uri)
      .toPromise()
      .then(response => response.text())
      .then(str => this.stripAwayXml(str))
      .then(jsonable => JSON.parse(jsonable) as MatchListFor211)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log(error);
    console.error('An error occurred', error.text()); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private stripAwayXml(xml: string): string{

    var jsonable_text: string = '[]';

    var start_of_json: number = xml.indexOf('[{');
    var end_of_json:number = xml.indexOf('}]');
    if(start_of_json >= 0 && end_of_json > 0)
    {
      jsonable_text = xml.substring(start_of_json, end_of_json+2);
    }

    console.log(jsonable_text);

    return jsonable_text;
  }

}
