import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { BrandService } from '../../../services/brand.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
 
})
export class CategoriesComponent implements  OnInit {
idname:any;
ids:any;
category_id :any;
ckformBrand:boolean = false;
ckformCategory:boolean = false;
brandform !:FormGroup ;

constructor(
  private _Act : ActivatedRoute,
  private _Brand :BrandService,
  private _fb : FormBuilder,
  private _routes:  Router,
  private _toastr: ToastrService,
  private _Cat : CategoriesService
){ }
ngOnInit(){
   this.Onloade();

}
CreateBrandName(){
  if (this.idname) {
    if (this.brandform.invalid) {
      this.ckformBrand = true
            return
    }
    if(this.brandform.valid && this.ids == null){
      this._Brand.CreateBrand(this.brandform.value).subscribe(res=>{
        this._routes.navigate(['/admin/product/brand']);
        this._toastr.success('Successfull Create a Brand!');
      }); 
    }


    if (this.ids) {
      this._Brand.UpdateBrand(this.ids,this.brandform.value).subscribe({
        next:(res)=>{
          this._routes.navigate(['/admin/product/brand']);
          this._toastr.success('Successfull Update a Brand!');
        },
        error:()=>{
          console.error("this is a error to create a brand")
        }
      })
    }
  }
 if(this.brandform.invalid)
  {
   this.ckformCategory = true
        return
  }
 
  if (this.category_id) {
    this._Cat.UpdateCategory(this.category_id , this.brandform.value)
    .subscribe({
      next:(res)=>{
        this._routes.navigate(['/admin/product/categories']);
        this._toastr.success('Successfull Update a Categories!');
      }
    });
  }
  
 if(this.category_id==null && ! this.idname )
  {
    this._Cat.CreateCategory(this.brandform.value).subscribe({
      next: (res)=>{
        this._routes.navigate(['/admin/product/categories']);
        this._toastr.success('Successfull Create a Categories!');
      },
      error :()=>{
        console.error('err in create a category')
      }
      })

  }

}
Onloade(){
    
    this.idname = this._Act.snapshot.paramMap.get('id');
    this.ids= this._Act.snapshot.paramMap.get('ids');
    this.category_id =  this._Act.snapshot.paramMap.get('catid');


    this.brandform= this._fb.group({
      categoryname:['',Validators.required]
      });
     
      if (this.category_id) {
        this._Cat.GetByIdCategory(this.category_id)
        .subscribe({
          next : (responce)=>{
            this.brandform.controls['categoryname'].setValue(responce.categoryname);
          },
          error :()=>{
            console.error('err is a update a category in CategoriesComponent')
          }
        })
      }


    if (this.idname){
      this.brandform= this._fb.group({
        brandname :['',Validators.required]
      });
    if (this.ids) {
        this._Brand.getById(this.ids).subscribe(result=>{
          this.brandform.controls['brandname'].setValue(result.brandname)
      })
     };
      
    
    }


}
  
}
