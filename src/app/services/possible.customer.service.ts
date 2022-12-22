import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { PossibleCustomer } from '../models/possibleCustomer';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PossibleCustomerService {

  apiUrl ="https://localhost:44307/api/";
  constructor(private httpClient:HttpClient) { }

  getPossibleCustomers(): Observable<listResponseModel<PossibleCustomer>> {
    let newPath = this.apiUrl + "possibleCustomers/getall"
    return this.httpClient.get<listResponseModel<PossibleCustomer>>(newPath);
 }

 getById(id:string): Observable<SingleResponseModel<PossibleCustomer>>{
  let newPath = this.apiUrl + "possibleCustomers/getbyid?id=" + id
  return this.httpClient.get<SingleResponseModel<PossibleCustomer>>(newPath);
 }

 add(possibleCustomer:PossibleCustomer): Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"possibleCustomers/add",possibleCustomer)
 }

 delete(id:string):Observable<ResponseModel>{
  let http=this.apiUrl+"possibleCustomers/delete?id=" +id
  console.log(http)
  return this.httpClient.get<ResponseModel>(http);
  }

  update(possibleCustomer:PossibleCustomer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + "possibleCustomers/update",possibleCustomer
    )
  }
}
