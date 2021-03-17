import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequerimientoService } from 'src/app/services/requerimiento.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  get_vehiculo:any [] = []
  get_actividades:any [] = []
  get_detalle:any [] = []
  formulario_registro: FormGroup
  fecha

  constructor(public _requerimientos_services:RequerimientoService,
              public fb:FormBuilder) { }

  ngOnInit(): void {
    this.get_vehiculo = this._requerimientos_services.vehiculo
    this.get_actividades = this._requerimientos_services.actividades
    this.get_detalle = this._requerimientos_services.detalles
    console.log('Datos del vehiculo');    
    console.log(this.get_vehiculo);
    console.log('Datos de las actividades');
    console.log(this.get_actividades);
    console.log('Datos de los detalles');
    console.log(this.get_detalle);
            
    this.fecha = new Date()
    this.datos_formulario_registro()
  }

  datos_formulario_registro(){
    this.formulario_registro = this.fb.group({
      kilometraje: ['',Validators.required]
    })
  }

}
