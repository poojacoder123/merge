import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';
import { Brand } from '../interfaces/brands-interFaces';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private _http : HttpClient
  ){

   }
   allConrans  = new BehaviorSubject("$")
AllDataGet(){
  return this._http.get<any>(environment._api+"api/brand")
};
CreateBrand(data:Brand){
  return this._http.post<Brand>(environment._api+"api/brand",data)
};

getById(id:string){
  return this._http.get<Brand>(environment._api+"api/brand/"+id)
};
DeleteBrand(id:string){
  return this._http.delete<Brand>(environment._api+"api/brand/"+id)
};

UpdateBrand(id:string,obj:Brand){
  return this._http.put<Brand>(environment._api+"api/brand/"+id ,obj)
}

 


}
