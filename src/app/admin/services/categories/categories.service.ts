import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http : HttpClient) { }
All_Categories(){
  return this._http.get<any>(environment._api+"/api/categoryname")

}

Add_Categories(obj:any){
  return this._http.post<any>(environment._api+"/api/categoryname",obj)
}
}