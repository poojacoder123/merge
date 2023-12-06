import {  Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';


import { MatDialog } from '@angular/material/dialog';

import { CategoriesService } from 'src/app/admin/services/categories/categories.service';
import { CategoriesComponent } from '../../shared/categories/categories.component';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],

})
export class ProductCategoriesComponent implements OnInit {
  dataSource:any = []
  displayedColumns: string[] = ['_id','color', 'name','images', 'products', 'product_count'  , 'status','Action','move'];
  allComplete: boolean = false;

new_color:any=[]

  constructor(

   private _Cat : CategoriesService,
   private _diologs : MatDialog,

){}
  
ngOnInit(): void {
  this.AlldataGet() 

}


applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}





  AlldataGet(){
      this._Cat.All_Categories()
      .subscribe((res)=>{
              
        this.dataSource = new MatTableDataSource(res)
        for(let c = 0; c<= res.length; c++){
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);
          this.new_color[c] = `rgb(${red},${green},${blue})`;
        }
      })
     }

        
       
  addData(){
    this._diologs.open(CategoriesComponent)


  }





  print_btn(){}
 

}
