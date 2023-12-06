import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { developments } from '../../interfaces/brands-interFaces';
@Injectable({
  providedIn: 'root'
})
export class DevelopmentsService {

  constructor(
    private _http : HttpClient
  ) { }

  Add_department(data:developments){
    return this._http.post<any>(environment._api+"/api/department",data)
  }

  Get_department(){
    return this._http.get<any>(environment._api+"/api/department")
  }
  Get_By_Id_dep(id:string){
    return this._http.get<developments>(environment._api+"/api/department/"+id)
  }
   Delete_dep(id:string){
    return this._http.delete<developments>(environment._api+"/api/department/"+id)
  }
  Update_dep(id:string,data:any){
    return this._http.delete<developments>(environment._api+"/api/department/"+id , data)
  }

}
