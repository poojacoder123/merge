import {  Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { CategoriesService } from '../../../services/categories.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],

})
export class ProductCategoriesComponent implements OnInit {
  dataSource:any = []
  displayedColumns: string[] = ['_id','color', 'name', 'products', 'product_count'  , 'status','Action','move'];
  allComplete: boolean = false;

new_color:any=[]

  constructor(
    private _routes : Router,
    private _Cat :CategoriesService,
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
      this._Cat.AllCategoryGet().subscribe((res)=>{
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
    this._diologs.open(AddDepartmentComponent, {
      data : {name : "Category"}
    })


  }
  editCategory(element:any){
    this._routes.navigate([`/admin/product/categories/add/${element._id}`])
  }



  OnDelete(element:any){
  
  let ids= element._id
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
      title: `Are you sure?`,
      html: `Are you want to remove this Category ?
     <b class='fs-4'>${element.categoryname}</b>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete It',
      cancelButtonText: 'No, Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._Cat.DeleteCategory(ids)
        .subscribe({
          next:(res:any)=>{
            this.AlldataGet()
          },
          error:()=>{
            console.error('err is a delete a category in ProductCategoriesComponent in this component')
          }
        })
      }else if (result.dismiss === Swal.DismissReason.cancel){
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
    )}});
     
      
  
  
  
  
  
  
  
  
  
  
  }

  randomColor() {
  
  }
  print_btn(){}
 

}
