
import { Component, OnInit } from '@angular/core';
import { VenderService } from 'src/app/admin/services/vender/vender.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
 
})
export class DashboardComponent implements OnInit {
  TotelVender!:number ;
constructor(
  private _Vender : VenderService
){}
  ngOnInit(): void {
   this._Vender.TotelVender.subscribe({
    next :(res)=> {
      this.TotelVender = res
      
    },
    error : (err) =>{

    }
   })
  }




}


