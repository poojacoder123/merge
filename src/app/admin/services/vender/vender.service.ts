import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { venders } from '../../interfaces/brands-interFaces';
import { BehaviorSubject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VenderService {
TotelVender = new BehaviorSubject(0)
  constructor(
    private _http : HttpClient
  ) { }

    Get_Vender(){
      return this._http.get<any>(environment._api+"/api/vendor").pipe(
        tap((res)=>{
          this.TotelVender.next(res.length)
        })
      )   
    
    }

    Add_Vendor(obj:venders){
        return this._http.post<venders>(environment._api+"/api/vendor" ,obj)
    }

      

}
