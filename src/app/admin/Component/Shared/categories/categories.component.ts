import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/admin/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
 
})
export class CategoriesComponent implements  OnInit {

    AddCategories! : FormGroup;
    fs!: File
constructor(
    private _fb : FormBuilder,
    private _Cate : CategoriesService,
    public _dilogs : MatDialog,
    private _toastr: ToastrService
 

){ }
ngOnInit(){
this.AddCategories = this._fb.group({
    CategoryName : ["" , Validators.required],
    CategoryImage : ['' , Validators.required]
})

}




img_upload(event : any){
if(event.target.files.length > 0){
    this.fs = event.target.files[0]
  
 
}
}


add_Categorys(){
    let Formdata :FormData = new FormData();
    Formdata.append("CategoryName" ,this.AddCategories.get('CategoryName')?.value)
    Formdata.append("CategoryImage" ,this.fs);

    
    
    this._Cate.Add_Categories(Formdata).subscribe({
        next :(res) =>{
           if (res) {
                this._dilogs.closeAll();
                this._toastr.success("Add Category Successful")
           }
        },
        error : () =>{
            this._toastr.error("error Category ?")
        }
    })
    
    }
  
}


