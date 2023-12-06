import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../../services/brand.service';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { GetBrand } from 'src/app/admin/Store/Actions/Brand.Actions';
import { Observable,Subscription} from 'rxjs'
import { BrandState } from 'src/app/admin/Store/States/Brand.State';
import { Brand } from '../../../interfaces/brands-interFaces';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartmentComponent } from '../../shared/add-department/add-department.component';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
 
export class BrandComponent implements OnInit ,OnDestroy {
  displayedColumns: string[] = ['_id','color' ,'brandname','items', 'product_count', 'status', 'Action','move'];
  dataSource:any=[];
  allComplete: boolean = false;
  new_color:any = [];

  // ngxs for redux to getdata for state
 @Select(BrandState.getBrandList) brandList$!:Observable<Brand[]>
 unsubrid!:Subscription;
   // ngxs for redux to getdata for status for loaded brand 
 @Select(BrandState.BrandLoaded) brandLoaded$!: Observable<boolean>  
 unloaded!:Subscription;

  constructor(
    private _routes : Router,
    private _Brand : BrandService,
    private _store : Store,
    public _digos : MatDialog
    ){}
 
    ngOnInit(): void {
      this.allDataGet();
  }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      
    }
    allDataGet(){
      this.unloaded = this.brandLoaded$.subscribe(loaded=>{
        if (!loaded) {
          this._store.dispatch(new GetBrand());
        }
       })

  this.unsubrid = this.brandList$.subscribe(result=>{
   
  this.dataSource = new MatTableDataSource(result);

   for(let c = 0; c<= result.length; c++){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    this.new_color[c] = `rgb(${red},${green},${blue})`;
    }})}
    addData(){
   const  dialogRef =  this._digos.open(AddDepartmentComponent, {
        data : { name : "Brand"}
      })
     
      dialogRef.afterClosed().subscribe(result => {
       });
    }
    delete(element:any){
        let id = element._id
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn Yase mx-2',
            cancelButton: 'btn No'
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: `Are you sure?`,
          html: `Do you want to remove this brand? This process cannot be undone.
      `,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: `<i class="fa-regular mt-1 mx-2 fa-check"></i> Confirm`,
          cancelButtonText:  `<i class="fa-light mt-1 mx-2 fa-xmark"></i> Cancel`,
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            this._Brand.DeleteBrand(id).subscribe(res=>{
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success' );
                this.allDataGet();
            });
          
          }else if (result.dismiss === Swal.DismissReason.cancel){
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
        )}});
    }
     editBrand(element:any){
      this._digos.open(AddDepartmentComponent, {
        data : { name : "Brand",
                  id : element._id
      }
      })
    }

    print_btn(){
      this.allDataGet();
      window.print()
    }

    ngOnDestroy(): void {
      this.unsubrid.unsubscribe();
      this.unloaded.unsubscribe();
     }

}
 
  

