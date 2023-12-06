import { Brand } from "../../interfaces/brands-interFaces";


export class GetBrand {
    static readonly type = '[Brand] get';
};

export class AddBrand {
    static readonly type = '[Brand] Add';
    constructor(public payload: Brand) {};
};
export  class GetByIdBrand {
    static readonly type = '[Brand] Id';
    constructor(public id :string ){};
};
export class DeleteBrand {
    static readonly type = '[Brand] delete';
    constructor (public id:string){};
};
export class UpdateBrand {
    static readonly type = '[Brand] Update';
    constructor(public payload: Brand) {};
};