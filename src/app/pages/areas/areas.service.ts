import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Area } from './areas.model';

@Injectable()
export class AreasService {

  //private URL = 'http://api.hubanking.vn/areas?page=1&per_page=100';
  private API_URL = 'http://api.hubanking.vn/areas';
  private API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDI3Nzk1MTksInN1YiI6MTY0LCJyb2xlIjoyMH0.xWXAvD4RvW9PXn_lMEa4z677K4eAUG0DY0RfAlRwjVs';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private _http: Http) {
  }

  getAreas(): Promise<Area[]> {
    const url = this.API_URL + '?page=1&per_page=100';
    return this._http.get(url)
             .toPromise()
             .then(response => response.json().data as Area[])
             .catch(this.handleError);
    }

    /*createArea(area: Area): Promise<Hero> {
  return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Hero)
    .catch(this.handleError);
}*/

  deleteArea(id: number): Promise<void> {
    const url = `${this.API_URL}/${id}` + '?apiKey=' + this.API_KEY;
    return this._http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateArea(area: Area): Promise<Area> {
    const url = `${this.API_URL}/${area.id}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `${this.API_KEY}`);
    let options = new RequestOptions({ headers: headers });
    
    return this._http
      .put(url, JSON.stringify({ name: area.name }), options)
      .toPromise()
      .then(() => area)
      .catch(this.handleError);
  }
            
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
