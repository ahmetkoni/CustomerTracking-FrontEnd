import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Session } from '../models/session';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  apiUrl ="https://localhost:44307/api/";
  constructor(private httpClient:HttpClient) { }

  getSessions(): Observable<listResponseModel<Session>> {
    let newPath = this.apiUrl + "sessions/getall"
    return this.httpClient.get<listResponseModel<Session>>(newPath);
 }

 getById(id:string): Observable<SingleResponseModel<Session>>{
  let newPath = this.apiUrl + "sessions/getbyid?id=" + id
  return this.httpClient.get<SingleResponseModel<Session>>(newPath);
 }

 add(session:Session): Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"sessions/add",session)
 }

 delete(id:string):Observable<ResponseModel>{
  let http=this.apiUrl+"sessions/delete?id=" +id
  console.log(http)
  return this.httpClient.get<ResponseModel>(http);
  }

  update(session:Session):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + "sessions/update",session
    )
  }
}
