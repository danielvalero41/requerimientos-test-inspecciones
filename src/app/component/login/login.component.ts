import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RequerimientoService } from 'src/app/services/requerimiento.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario_login:FormGroup

  constructor(public fb:FormBuilder, public _requerimientos_service:RequerimientoService) { }

  ngOnInit(): void {

    this.credenciales()

  }//OnInit

  credenciales(){
    this.formulario_login = this.fb.group({
      user:['',Validators.required],
      password:['',Validators.required]
    })
  }//credenciales

  SignUp(){
    var body = {
      user: this.formulario_login.value.user,
      password: this.formulario_login.value.password
    }
    this._requerimientos_service.verificar_credenciales(body) 
        
  }//Prueba

}
