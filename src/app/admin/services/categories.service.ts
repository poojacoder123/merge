import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private _http : HttpClient
  ) {}


CreateCategory(obj:any){
  return this._http.post<any>(environment._api+"api/category",obj);
}
AllCategoryGet(){
    return this._http.get<any>(environment._api+"api/category");
  }
GetByIdCategory(id:string){
    return this._http.get<any>(environment._api+"api/category/"+id);
  }
DeleteCategory(id:string){
    return this._http.delete<any>(environment._api+"api/category/"+id);
  }
UpdateCategory(id:string,obj:any){
  return this._http.put<any>(environment._api+"api/category/"+id ,obj);
}
  















}