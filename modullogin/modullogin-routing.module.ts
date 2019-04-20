import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulloginComponent } from './modullogin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ModulloginRoutingModule { }
