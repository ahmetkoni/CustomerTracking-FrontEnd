import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investor } from '../models/investor';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  apiUrl ="https://localhost:44307/api/";
  constructor(private httpClient:HttpClient) { }

  getInvestors(): Observable<listResponseModel<Investor>> {
    let newPath = this.apiUrl + "investors/getall"
    return this.httpClient.get<listResponseModel<Investor>>(newPath);
 }

 getById(id:string): Observable<SingleResponseModel<Investor>>{
  let newPath = this.apiUrl + "investors/getbyid?id=" + id
  return this.httpClient.get<SingleResponseModel<Investor>>(newPath);
 }

 add(investor:Investor): Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"investors/add",investor)
 }

 delete(id:string):Observable<ResponseModel>{
  let http=this.apiUrl+"investors/delete?id=" +id
  console.log(http)
  return this.httpClient.get<ResponseModel>(http);
  }

  update(investor:Investor):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + "investors/update",investor
    )
  }
}
