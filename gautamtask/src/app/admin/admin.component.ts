import { Component, OnInit } from '@angular/core';
import {TranslateHedaerService} from '../admin/services/translate-hedaer.service';
import { TranslateService } from '@ngx-translate/core';
import { MdbCollapseDirective } from 'mdb-angular-ui-kit/collapse';
import { Sub_Menu} from './Component/Shared/minu'
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
 
import { SettingsComponent } from './component/pages/settings/settings.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],

})
export class AdminComponent implements OnInit {
  
  menu:any;
  Sub_menus:any;
  // settings:any;
  subs_menu:any;
  broserleng : any;
  SettingsMenu : any;
  persent:number = 50;
  colors : string  = 'bg-success'
  modalRef!: MdbModalRef<SettingsComponent>;

constructor(
  private _tra : TranslateHedaerService ,
  public translate : TranslateService,
  private _router : Router,
  private _modalService: MdbModalService
){}

  ngOnInit(): void {
    this.Sub_menus = Sub_Menu;
    this.OnPageLoadeData()
   
  }
  // ngOnInit(): void {
  //   this.Sub_menus = settings;
  //   this.OnPageLoadeData()
  // }

  tran(data:any){
   this._tra.selectedleng.next(data)
  this.translate.use(data)
  }
  changlang(){
    this.translate.use(this.broserleng.match(/ab|en/) ? this.broserleng : "en")
  }
  onCollapseShow(event: MdbCollapseDirective) {
  }

  sub_menu(e:Event){
    const arrows = document.querySelectorAll<HTMLElement>(".arrow");

    for (let i = 0; i < arrows.length; i++) {
        const arrowParent = (e.target as HTMLElement).parentElement?.parentElement; // selecting main parent of arrow
        if (arrowParent) {
          arrowParent.classList.toggle("showMenu");
        }
   
    }
    



    
  }
  OnPageLoadeData(){

  if (this.persent <= 25) {
    this.colors = 'bg-info';
} else if (this.persent <= 50) {
    this.colors = 'bg-success';
} else if (this.persent <= 75) {
    this.colors = 'bg-warning';
} else if (this.persent <= 100) {
    this.colors = 'bg-danger';
}

  this._tra.selectedleng.subscribe(leng=>{
    
  });
  this.translate.addLangs(["ab", "en"])
  this.translate.setDefaultLang('en')
  this.translate.use('en')
  this.broserleng = this.translate.getDefaultLang();
  this.changlang()
  this._tra.selectedleng.next(this.broserleng)
  }

  set_seteing(){
    this.modalRef = this._modalService.open(SettingsComponent, {
      modalClass: 'modal-xl'
    })
  }
  set_profile(){
    this._router.navigate(['/admin/profile'])
  }


  openModal() {
  
  }
}
