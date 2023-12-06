import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Units } from '../../interfaces/brands-interFaces';
@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private _http : HttpClient) { }
  Get_All_Unit(){
    return this._http.get<any>(environment._api+"/api/unit")
  }
Add_Units(obj:Units){
    return  this._http.post<Units>(environment._api+"/api/unit",obj)
}



}
