import { Component, OnInit } from '@angular/core';
import { RequerimientoService } from '../services/requerimiento.service';
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  actividad_linea: any[] = []
  _formulario_registro:FormGroup
  _formulario_detalle:FormGroup
  token:string

  constructor(public _requerimiento_service:RequerimientoService,
                      public activatedrouter:ActivatedRoute,
                      public fb:FormBuilder) {

    activatedrouter.params.subscribe((params)=>{
      console.log(params.token);
      _requerimiento_service.getActivitiesByLine(params.token) 
      this.token = params.token     
    })
  }

  ngOnInit(): void {
    this.actividad_linea = this._requerimiento_service.line 
    this.formulario_regis()  
    this.formulario_det()   
  }//OnInit

  formulario_regis(){
    this._formulario_registro =  this.fb.group({
      kilometraje:['',Validators.required],
      observaciones:['',Validators.required]
    })
  }//formulario regis

  formulario_det(){
    this._formulario_detalle = this.fb.group({
      conforme:['',Validators.required],
      observacion:['',Validators.required]
    })
  }//formulario_det

  Guardar_registro(){
    var body = {
      id_vehiculo: 1,
      kilometraje: this._formulario_registro.value.kilometraje,
      observaciones: this._formulario_registro.value.observacion
    }    
    
    this._requerimiento_service.agregar_registro(body,this.token)
  }//Guardar_registro

  Guardar_detalle(){
    var body = {
      id_inspeccion: 1,
      id_activdad_por_linea: 3,
      conforme: this._formulario_detalle.value.conforme,
      Observacion: this._formulario_detalle.value.observacion
    }
    this._requerimiento_service.agregar_detalle(body,this.token)
    
  }//Guardar_detalle

}
