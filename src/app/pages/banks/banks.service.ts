import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Bank, BankBranch } from './banks.model';


@Injectable()
export class BanksService {

  private API_URL = 'http://api.hubanking.vn/banks';
  constructor(private _http: Http) {

  }
  
  getBanks(): Promise<Bank[]> {
    return this._http.get(this.API_URL)
             .toPromise()
             .then(response => response.json().data as Bank[])
             .catch(this.handleError);
  }

  getBank(id: number): Promise<Bank> {
    const url = `${this.API_URL}/${id}`;
    return this._http.get(url)
      .toPromise()
      .then(response => response.json().data as Bank)
      .catch(this.handleError);
  }

  getBankBranches(bankId: number): Promise<BankBranch[]> {
    const queryParam = '/branches?bank_id=';
    const url = `${this.API_URL}/${queryParam}${bankId}`;
    return this._http.get(url)
             .toPromise()
             .then(response => response.json().data as BankBranch[])
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
