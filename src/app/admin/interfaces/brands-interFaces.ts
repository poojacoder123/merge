export interface Brand {
    _id ?:string,
    __v ?: number,
    BrandName : string,
    createdAt?: string,
    updatedAt?: string
       
}

export interface Units {
  _id ?:string,
  __v ?: number,
  UnitName: string
}

export interface allsuppliers {
    _id ?:string,
    name: string;
    phone_number: string;
    email: string;
    address:string;
    __v ?: number,
  }

 export interface Orderinterface {
    ORDER_NO : string,
    PRODUCT : string,
    PRICE : number,
    AMOUNT : number,
    Qut : number,
    ORDER_DATE : string
  }
  export  interface PurchaseOrder_interface {
    _id ? : string,
    __v ?: number,
    Notes ?: string
    DueDate : string
    PartyAccount : string
    PurchaseSalesLedger :string
    ProductName : string
    Quantity: number
    Price :number,
    Status:string,
    Warehouse : string,
    newProduct : any
 }

 export interface developments {
  DepartmentName: string;
  Status: boolean;
  _id ?:string,
  __v ?: number,
   
}

export interface venders {
  _id ?:string,
__v ?: number,
VendorName: string,
VendorId: string,
VendorContactNo: number,
VendorEmail: string,
VendorTaxNumber: number,
BillingName: string,
BillingContact:string,
BillingCity: string,
BillingState: string,
BillingCountry: string,
BillingZipCode: number,
BillingAddress: string,
ShippingName: string,
ShippingContactNo: number,
ShippingCity: string,
ShippingState: string,
ShippingCountry: string,
ShippingZipCode: number,
ShippingAddress: string,
   
}