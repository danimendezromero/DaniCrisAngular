import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { ModulloginRoutingModule } from './modullogin-routing.module';
import { ModulloginComponent } from './modullogin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    ModulloginComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    ModulloginRoutingModule,
    FormsModule,
    CommonModule
  ],
  //providers: [],
  //bootstrap: [ModulloginComponent]
  exports: [
    NavbarComponent
  ]
})
export class ModulloginModule { }
