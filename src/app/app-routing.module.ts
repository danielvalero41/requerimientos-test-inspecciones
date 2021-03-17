import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'registro', component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
