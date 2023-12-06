
import {Component, OnInit, OnDestroy , ViewEncapsulation, signal} from '@angular/core';
import { BrandService } from '../../../services/brand.service';
// import { CategoriesService } from '../../../services/categories.service';
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

  product_types:any ;

  
dropdownListcolor :any[] = [];
selectedItemscolor :any[] = [];
dropdownSettingscolor = {};
varent_color: any[] = [];
set_variant:any;
dropdownSettingsMaterial = {};
dropdownListMaterial :any[] = [];
selectedItemsmaterial :any[] = [];
varent_Material: any[] = [];

dropdownSettingsSize = {};
dropdownListSize :any[] = [];
selectedItemsSize :any[] = [];
varent_Size: any[] = [];


objk:any = { color : undefined,
             size : undefined ,
             material_name : undefined
           }




 
constructor(
  private _Brand : BrandService,
  // private _Cat : CategoriesService,
){}
  ngOnDestroy(): void {

  }
 ngOnInit(): void {
    this.allBrand()
  this.newpagesload();
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

  // this._Cat.AllCategoryGet().subscribe({
  //   next : (res)=>{
  //     this.allCategoryName = res
     
  //   },
  //   error : (err)=>{
  //     console.error("this is a err in get AllCategoryGet in MainProductComponent")
  //   }
  // });

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

}
onSelectAll(items: any) {
  
}


product_prices(event:any){
  this.cost_price = event.target.value;

}
product_cost(event:any){
this.sales_price = event.target.value;
this.totalProfit = this.cost_price - this.sales_price;
this.totalMargin = ((this.totalProfit / this.cost_price) * 100)

}

set_product_type(evn:any){
  this.product_types = evn.target.value ;
}
 



public newpagesload() {


  
  this.dropdownListcolor = [
    { item_id: 1, color: 'Red' ,   },
    { item_id: 2, color: 'Grey' ,  },
    { item_id: 3, color: 'green' ,  },
    { item_id: 4, color: 'White' ,  },
    { item_id: 5, color: 'Black' ,  }
  ];
 
  this.dropdownSettingscolor = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'color',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  this.dropdownSettingsSize = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'size',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  this.dropdownListSize = [
    { item_id: 1, size: 34,  },
    { item_id: 2, size: 45,  },
    { item_id: 3, size: 76,  },
    { item_id: 4, size: 34,  },
    { item_id: 5, size: 67,  }
  ];
  this.dropdownListMaterial = [
    { Material_id: 1, material_name: 'Cotton' },
    { Material_id: 2, material_name: 'Silk' },
    { Material_id: 3, material_name: 'Polyester' },
    { Material_id: 4, material_name: 'Georgette' },

  ];
 this.dropdownSettingsMaterial = {
    singleSelection: false,
    idField: 'Material_id',
    textField: 'material_name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };


}
onItemSelectColor(item: any) {
this.varent_color.push(item)
}
onSelectAllColor(items: any) {

}

onItemSelectMaterial(item: any) {
 this.varent_Material.push(item)
}
onSelectAllMaterial(items: any) {
 
}

onSelectAllsize(item : any){

}
onItemSelectsize(item : any){
  this.varent_Size.push(item)

}



ok(){
      this.objk.color = this.varent_color;
      this.objk.size = this.varent_Size;
      this.objk.material_name = this.varent_Material;
    }

set_variants(env:any){
this.set_variant= env.target.value;

}


}


