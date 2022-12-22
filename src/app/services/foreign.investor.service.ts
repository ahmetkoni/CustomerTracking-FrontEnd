import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForeignInvestor } from '../models/foreignInvestor';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ForeignInvestorService {
  apiUrl ="https://localhost:44307/api/";
  constructor(private httpClient:HttpClient) { }

  getForeignInvestors(): Observable<listResponseModel<ForeignInvestor>> {
    let newPath = this.apiUrl + "foreignInvestors/getall"
    return this.httpClient.get<listResponseModel<ForeignInvestor>>(newPath);
 }
 getById(id:string): Observable<SingleResponseModel<ForeignInvestor>>{
  let newPath = this.apiUrl + "foreignInvestors/getbyid?id=" + id
  return this.httpClient.get<SingleResponseModel<ForeignInvestor>>(newPath);
 }

 add(foreignInvestor:ForeignInvestor): Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"foreignInvestors/add",foreignInvestor)
 }

 delete(id:string):Observable<ResponseModel>{
  let http=this.apiUrl+"foreignInvestors/delete?id=" +id
  console.log(http)
  return this.httpClient.get<ResponseModel>(http);
  }

  update(foreignInvestor:ForeignInvestor):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + "foreignInvestors/update",foreignInvestor
    )
  }
}
