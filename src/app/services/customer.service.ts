import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl ="https://localhost:44307/api/";
  constructor(private httpClient:HttpClient) { }

  getCustomers(): Observable<listResponseModel<Customer>> {
    let newPath = this.apiUrl + "customers/getall"
    return this.httpClient.get<listResponseModel<Customer>>(newPath);
    // return this.httpClient
    // .get<listResponseModel<Customer>>(this.apiUrl)
 }
 getById(id:string): Observable<SingleResponseModel<Customer>>{
  let newPath = this.apiUrl + "customers/getbyid?id=" + id
  return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
 }

 add(customer:Customer): Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"customers/add",customer)
 }

 delete(id:string):Observable<ResponseModel>{
  let http=this.apiUrl+"customers/delete?id=" +id
  console.log(http)
  return this.httpClient.get<ResponseModel>(http);
  }

  update(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + "customers/update",customer
    )
  }
}