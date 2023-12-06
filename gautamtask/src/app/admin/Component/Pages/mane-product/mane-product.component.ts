import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { BrandService } from '../../../services/brand.service';
import { ProductViewComponent } from '../../shared/product-view/product-view.component';

export interface PeriodicElement {
  id:number;
  name:string,
  img: string;
  category : string,
  brand : string,
  price: string;
  SKU : string,
  stock: number;
  quantity :string;
  status : string;
  expiry_date : string;
}

let  ELEMENT_DATA: PeriodicElement[] = [
  {id:1,name:'Amer deep shing', img : '../../../../../assets/product1.jpg', category:'mobile', brand:'apple faiosdfgsdp8ftfkjuzdpf', price:"1,000" , stock: 100, quantity :"20 in stock" , SKU: '98734sah' , status : 'Completed' , expiry_date : '24-03-21'},
  {id:2,name : "Jaya" , img : '../../../../../assets/product2.jpg',category:'mobile', brand:'oppo', price:"100,000,00000000000000", stock: 4509,quantity : "1808 in stock" , SKU: '98734sah' , status : 'Pending', expiry_date :'28-03-18'},
  {id:3,name : "Kuldeep shing", img : '../../../../../assets/images.png',category :'mobile', brand:'poco', price:"1,000", stock: 932,quantity : "30 in stock", SKU: '98734sah' , status : 'Failed' ,expiry_date :'21-03-23'},
  {id:3,name : "deepak", img : '../../../../../assets/product3.jpg',category :'mobile', brand:'poco', price:"1,000", stock: 932,quantity : "30 in stock", SKU: '98734sah' , status : 'Failed' ,expiry_date :'21-03-19'},
  {id:3,name : "Amer", img : '../../../../../assets/product3.jpg',category :'mobile', brand:'poco', price:"1,000", stock: 932,quantity : "30 in stock", SKU: '98734sah' , status : 'Failed' ,expiry_date :'21-03-20'},
];



@Component({
  selector: 'app-mane-product',
  templateUrl: './mane-product.component.html',
  styleUrls: ['./mane-product.component.scss'],
 
})
export class ManeProductComponent implements OnInit {
  allComplete: boolean = false;
  new_tag:any;
  new_color:any = [];
   displayedColumns: string[] = ['_id','imges' ,'name', 'category', 'Brand','price' , 'quantity', 'expiry_date', 'status', 'SKU','Action',];
  dataSource:PeriodicElement[] =[];
  modalRef: MdbModalRef<ProductViewComponent> | null = null  ;
  
  config = {
    animation: true,
    backdrop: true,
    containerClass: 'right',
    data: {
      title: 'Custom title'
    },
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-top-right',

  }
  constructor(
    private _brand: BrandService,
    private _routes : Router,
    private _MDBSER:MdbModalService
    ){
     
      this._brand.allConrans.subscribe({
        next : (res)=>{
          this.new_tag = res
        }
      })
      }
  ngOnInit(): void {
   this.getData()
  }
  openModal() {
    this.modalRef = this._MDBSER.open(ProductViewComponent, this.config);
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(this.modalRef)
    });
  }

  getData(){
    this.dataSource = ELEMENT_DATA;
    for(let c = 0; c<= ELEMENT_DATA.length; c++){
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      this.new_color[c] = `rgb(${red},${green},${blue})`;
    }
  }
  add_product(){
    this._routes.navigate(['/admin/product/main']);
    
  }
 
  openDialog(){
   this._routes.navigate(['/admin/product/detail'])
  }


  applyFilter(event: Event) {
    
   }
}
