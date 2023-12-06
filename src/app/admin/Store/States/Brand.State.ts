import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Brand } from "../../interfaces/brands-interFaces";
import { Injectable } from "@angular/core";
import { AddBrand, GetBrand } from "../Actions/Brand.Actions";
import { BrandService } from "../../services/brand.service";
import { tap } from "rxjs";

export class BrandStateModel {
    brand !: Brand[]
    brandloaded!:boolean
}


@State<BrandStateModel>({
    name : 'Brand',
    defaults : {
        brand : [],
        brandloaded : false
}
})

@Injectable()
export class BrandState {
    constructor(
        private _BrandServices:BrandService
    ){}

    @Selector()
    static getBrandList(state : BrandStateModel){
        return state.brand
    }
    @Selector()
    static BrandLoaded(state : BrandStateModel){
        return state.brandloaded
    }
    @Action(GetBrand)
    getBrand({getState, setState}:StateContext<BrandStateModel>){
      return  this._BrandServices.AllDataGet().pipe(tap(res=>{
       const state = getState();
      setState({
            ...state,
            brand:res,
            brandloaded:true

        })
      }))
    }
@Action(AddBrand)
    addBrand({getState , patchState}:StateContext<BrandStateModel>,{payload}:AddBrand ){
       return this._BrandServices.CreateBrand(payload).pipe(tap((res:Brand)=>{
        const state = getState()
            patchState({
                brand : [...state.brand,res]
            })
       }))
    }
    }