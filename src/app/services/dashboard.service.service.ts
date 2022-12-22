import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Investor } from '../models/investor';
import { listResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  apiUrl ="https://localhost:44307/api/";
  constructor(private httpClient:HttpClient) { }

  getCount(): Observable<SingleResponseModel<number>>{
    let newPath = this.apiUrl + "customers/getcount"
    return this.httpClient.get<SingleResponseModel<number>>(newPath);
  }

  getInvest():Observable<SingleResponseModel<number>>{
    let newPath = this.apiUrl + "investors/getinvest"
    return this.httpClient.get<SingleResponseModel<number>>(newPath);
  }

  getForeignInvest():Observable<SingleResponseModel<number>>{
    let newPath= this.apiUrl + "foreignInvestors/getforeigninvest"
    return this.httpClient.get<SingleResponseModel<number>>(newPath)
  }
    
    
  getById(id:string): Observable<SingleResponseModel<Customer>>{
    let newPath = this.apiUrl + "customers/getbyid?id=" + id
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
   }
}

