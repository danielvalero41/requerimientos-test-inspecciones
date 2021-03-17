import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'prueba/:token', component:PruebaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
