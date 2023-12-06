import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import {  filter, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(
    private _http : HttpClient
  ) { }

Add_Order(obj:any){
return this._http.post<any>(`${environment._api}/api/order/`,obj)
}

Get_Order(){
  return this._http.get<any>(`${environment._api}/api/order/`)
  }
Get_by_id(id:any) {
  return this._http.get<any>(`${environment._api}/api/order/${id}`)
}

Order_panding(){
  return this._http.get<any>(`${environment._api}/api/order/`).pipe(
    map(res => res.filter((val:{ Status: any; })=>(val.Status == 'pending'))))
 }

}
