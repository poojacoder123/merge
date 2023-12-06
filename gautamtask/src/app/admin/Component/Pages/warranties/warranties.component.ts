import { Component ,OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';





export interface PeriodicElement {
  name: string;
  position: number;
  start_date: string;
  end_date: string;
  pradet:any;
  product : string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Car', start_date: '2023-10-01', end_date : '2025-07-20', pradet:null, product : 'Mi, Samsung,Oppo' , symbol: 'H'},
  {position: 2, name: 'Mobile', start_date: '2019-05-10', end_date : '2021-04-21', pradet:null,  product : 'Mi, Samsung,Oppo' , symbol: 'He'},
  {position: 3, name: 'Headphone', start_date:'2022-09-22', end_date : '2025-08-30', pradet:null,  product : 'Mi, Samsung,Oppo' , symbol: 'Li'},
  {position: 4, name: 'Leptop', start_date:'2021-12-08', end_date : '2022-12-09', pradet:null,  product : 'Mi, Samsung,Oppo' ,symbol: 'Be'},

];
@Component({
  selector: 'app-warranties',
  templateUrl: './warranties.component.html',
  styleUrls: ['./warranties.component.scss']
})
export class WarrantiesComponent  implements OnInit  {
  displayedColumns: string[] = ['Box','color' ,'name','START_DATE', 'END_DATE', 'PERIOD' , 'PRODUCTS' , '#PRODUCTS' , 'status', 'Action','move'];
  dataSource:any=[];
  allComplete: boolean = false;
  new_color:any = [];

  startDate!: string;
  endDate!: string;
  duration!:number;



  ngOnInit(): void {
    this.alldataGet()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
}

alldataGet(){
  this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  for(let c = 0; c<= ELEMENT_DATA.length; c++){
   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);
   this.new_color[c] = `rgb(${red},${green},${blue})`;
 }

 ELEMENT_DATA.forEach((d :any)=>{

  const start = new Date(d.start_date);
  const end = new Date(d.end_date);
  const timeDifference = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) ;
  const years = Math.floor(timeDifference / 12);
  const remainingMonths = timeDifference % 12;
 
  if(years === 0) {
    return  d.pradet = `${remainingMonths} month`;
  }else if (remainingMonths === 0 ) {
    return d.pradet = `${years} year`;
  }else {
    return  d.pradet = `${years} year,${remainingMonths} month`;
  }
 

 })



 }




}
