import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PurchaseOrder_interface } from '../../interfaces/brands-interFaces';
@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(
    private _http : HttpClient
  ) { }

Add_Order(obj:PurchaseOrder_interface){
return this._http.post<PurchaseOrder_interface>(`${environment._api}api/order/` ,obj)
}



}
