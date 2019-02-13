import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActesComponent } from './components/actes/actes.component';
import { ActeComponent } from './components/acte/acte.component';

const routes: Routes = [
  { path: '', redirectTo: '/actes', pathMatch: 'full' },
  {path:'actes',component: ActesComponent},
  {path:'acte/:id',component: ActeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
