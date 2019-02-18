import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActeComponent } from './components/acte/acte.component';
import { ActesComponent } from './components/actes/actes.component';
import { AddacteComponent } from './components/addacte/addacte.component';
import { GroupComponent } from './components/group/group.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'acte/:id',component: ActeComponent},
  {path:'actes',component: ActesComponent},
  {path:'login',component: LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'addacte',component: AddacteComponent},
  {path:'group',component: GroupComponent},
  {path: '**', component: NotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
