import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-setvalu',
  templateUrl: './setvalu.component.html',
  styleUrls: ['./setvalu.component.scss']
})
export class SetvaluComponent implements OnInit {
  dropdownListcolor :any[] = [];
  selectedItemscolor :any[] = [];
  dropdownSettingscolor = {};
  varent_color: any[] = [];

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

constructor(){}
 ngOnInit() {
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
    console.log(items);
  }

  onItemSelectMaterial(item: any) {
   this.varent_Material.push(item)
  }
  onSelectAllMaterial(items: any) {
    console.log(items);
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




    console.log(this.objk)
  }
}
