export interface Brand {
    _id ?:string,
    __v ?: number,
    brandname : string,
    createdAt: string,
    updatedAt: string
       
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
    Warehouse : string
 }