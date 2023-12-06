import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "admin",
    loadChildren : ()=>import('./admin/admin.module').then(a=>a.AdminModule)
  },
  {
    path : "",
    loadChildren : ()=>import('./user/user.module').then(u=>u.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
