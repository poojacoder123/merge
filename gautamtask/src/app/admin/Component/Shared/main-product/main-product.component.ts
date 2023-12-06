
import {Component, OnInit, OnDestroy , ViewEncapsulation} from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { CategoriesService } from '../../../services/categories.service';
import { FormControl ,AbstractControl,  FormGroup  } from '@angular/forms';



@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainProductComponent implements OnInit,OnDestroy  {
  all_tag:any;
  allBrandName:any = [] ;
  allCategoryName:any = [];
  colors:boolean = false;
  plaseholder:string | undefined ;
  cost_price:any;
  sales_price:any;
  totalProfit:any;
  totalMargin:any;
  toppings = new FormControl('');
  values :any = [];
  selectedItems:any = [];
  dropdownSettings:any = {};


 
constructor(
  private _Brand : BrandService,
  private _Cat : CategoriesService,
){}
  ngOnDestroy(): void {

  }
 ngOnInit(): void {
    this.allBrand()
 
  }

 
  
 
allBrand(){
  this._Brand.AllDataGet().subscribe(res=>{
    this.allBrandName = res

  });
  this._Brand.allConrans.subscribe({
    next : (res) =>{
      this.all_tag = res
    }
  })

  this._Cat.AllCategoryGet().subscribe({
    next : (res)=>{
      this.allCategoryName = res
      console.log(res)
    },
    error : (err)=>{
      console.error("this is a err in get AllCategoryGet in MainProductComponent")
    }
  });

  this.dropdownSettings = {
    singleSelection: false,
    textField: 'categoryname',
    createField: 'createdAt',
    updateField: 'updatedAt',
    updatev: '__v',
    idField: '_id',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
}
onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}
add_opction(e:any){
  let val = e.target.value;
  if(val == 'color'){
    this.colors = true;
    this.plaseholder = 'Black';
    this.values.push({
      val : '',
      
  });
  }
  if(val == 'Size'){
    this.colors = true
    this.plaseholder = 'Medium'
  }
  if(val == 'Style'){
    this.colors = true
    this.plaseholder = 'Classic'
  }
  if(val == 'Material'){
    this.colors = true
    this.plaseholder = 'Rubber'
  }
}

ADD_INPUT_TYPE(){
  this.values.push({
    val : '',
  });
}

product_prices(event:any){
  this.cost_price = event.target.value;

}
product_cost(event:any){
this.sales_price = event.target.value;
this.totalProfit = this.cost_price - this.sales_price;
this.totalMargin = ((this.totalProfit / this.cost_price) * 100)

}

addBut(){
  this.values.push({
    val : '',
    
})


}
remove(i:any){
  this.values.splice(i,1)
}


}
