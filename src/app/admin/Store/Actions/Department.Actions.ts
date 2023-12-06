import { developments } from "../../interfaces/brands-interFaces";

export class Get_Departments {
    static readonly type = '[Departments] Get'
  }
export class Add_Departments {
    constructor(public payload:developments){}
  static readonly type = '[Departments] Add'
}

export class Get_By_Id_Dep {
    static readonly type = '[Departments] Get'
    constructor(public id : string){}
  }

export class Delete_Departments {
    static readonly type = '[Departments] Delete'
    constructor(public id : string) {} 
  }
export class Update_Departments {
    static readonly type = '[Departments] Update'
    constructor(public  payload : developments) {}
}
