import { Action, Selector, State, StateContext } from "@ngxs/store";
import { developments } from "../../interfaces/brands-interFaces";
import { Injectable } from "@angular/core";
import { DevelopmentsService } from "../../services/developments/developments.service";
import { Get_Departments } from "../Actions/Department.Actions";
import { tap } from "rxjs";



export class DepartmentsStateModel {
    department !: developments[]
    departmentloaded!:boolean
}


@State<DepartmentsStateModel>({
    name : 'Department',
    defaults : {
        department : [],
        departmentloaded : false
}
})

@Injectable()
export class DepartmentState {
    constructor(
        private _Depat : DevelopmentsService
    ){}
    @Selector()
    static getDepartmentList(state : DepartmentsStateModel){
        return state.department
    }
    @Selector()
    static DepartmentLoaded(state : DepartmentsStateModel){
        return state.departmentloaded
    }
    @Action(Get_Departments)
    GetDepat({getState,setState}:StateContext<DepartmentsStateModel>){
        return this._Depat.Get_department().pipe(tap((res )=>{
                const state = getState();
       
             
                setState({
                    ...state,
                    department: res,
                    departmentloaded : true
                })
            })
        )
    }
}




