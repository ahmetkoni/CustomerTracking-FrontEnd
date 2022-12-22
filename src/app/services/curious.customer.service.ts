import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CuriousCustomer } from "../models/curiousCustomer";
import { listResponseModel } from "../models/listResponseModel";
import { ResponseModel } from "../models/responseModel";
import { SingleResponseModel } from "../models/singleResponseModel";

@Injectable({
    providedIn: 'root'
  })
  export class CuriousCustomerService{
    apiUrl ="https://localhost:44307/api/";
    constructor(private httpClient:HttpClient) { }

    getCuriousCustomers(): Observable<listResponseModel<CuriousCustomer>> {
      let newPath = this.apiUrl + "curiousCustomers/getall"
      return this.httpClient.get<listResponseModel<CuriousCustomer>>(newPath);
      // return this.httpClient
      // .get<listResponseModel<Customer>>(this.apiUrl)
   }
   getById(id:string): Observable<SingleResponseModel<CuriousCustomer>>{
    let newPath = this.apiUrl + "curiousCustomers/getbyid?id=" + id
    return this.httpClient.get<SingleResponseModel<CuriousCustomer>>(newPath);
   }
  
   add(curiousCustomer:CuriousCustomer): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"curiousCustomers/add",curiousCustomer)
   }

   delete(id:string):Observable<ResponseModel>{
   let http=this.apiUrl+"curiousCustomers/delete?id=" +id
   console.log(http)
   return this.httpClient.get<ResponseModel>(http);
   }

   update(curiousCustomer:CuriousCustomer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + "curiousCustomers/update",curiousCustomer
    )
  }
}