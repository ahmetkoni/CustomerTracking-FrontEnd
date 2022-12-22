import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { RoutineService } from '../models/routineService';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RoutineServiceService {

  apiUrl ="https://localhost:44307/api/";
  constructor(private httpClient:HttpClient) { }

  getRoutineServices(): Observable<listResponseModel<RoutineService>> {
    let newPath = this.apiUrl + "routineServices/getall"
    return this.httpClient.get<listResponseModel<RoutineService>>(newPath);
 }

 getById(id:string): Observable<SingleResponseModel<RoutineService>>{
  let newPath = this.apiUrl + "routineServices/getbyid?id=" + id
  return this.httpClient.get<SingleResponseModel<RoutineService>>(newPath);
 }

 add(routineService:RoutineService): Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"routineServices/add",routineService)
 }

 delete(id:string):Observable<ResponseModel>{
  let http=this.apiUrl+"routineServices/delete?id=" +id
  console.log(http)
  return this.httpClient.get<ResponseModel>(http);
  }

  update(routineService:RoutineService):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + "routineServices/update",routineService
    )
  }
}
