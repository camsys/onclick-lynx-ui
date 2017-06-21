import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


// import { Observable }        from 'rxjs/Observable';
// import { Subject }           from 'rxjs/Subject';

// Observable class extensions
// import 'rxjs/add/observable/of';

// Observable operators
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/toPromise';

import { ParentLevelService } from './parent-level-service';
import { Globals } from './globals';

@Injectable()
export class ParentLevelServiceService {

  private refernetUrl = 'http://www.referweb.net/mws/service.asmx/';
  // constructor(private http: Http) { }

  constructor(private http: Http) {
  }

  api_key: string = 'KIXUUKWX';
  state: string = 'FLORIDA';
// return this.http.get(this.refernetUrl+'GetCounties?API_KEY='+this.api_key+'&state='+this.state+'&DeviceID=')

  //We are using the promise format over the observable format because we are performing a simple get request and not doing much with the data beyond displaying it.
  //We expect reasonable quick responses from the server and won't likely run into a request-cancel-new-request sequence.
  getParentLevelServices(): Promise<ParentLevelService[]> {
    return this.http.get(this.refernetUrl+'Category?API_KEY='+this.api_key+'&DeviceID=')
      .toPromise()
      .then(response => response.text())
      // .then(str => console.log(str))
      .then(str => this.stripAwayXml(str))
      .then(jsonable => JSON.parse(jsonable) as ParentLevelService)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private stripAwayXml(xml: string): string{

    var start_of_json: number = xml.indexOf('[{');
    var end_of_json:number = xml.indexOf('}]');
    var jsonable_text: string = xml.substring(start_of_json, end_of_json+2);

    return jsonable_text;
  }

}
