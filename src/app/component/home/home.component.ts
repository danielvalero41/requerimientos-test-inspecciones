import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { RequerimientoService } from 'src/app/services/requerimiento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  token:string
  get_vehiculo:any [] = []
  get_actividades:any [] = []
  get_detalle:any [] = []

  constructor(public router:Router, 
              public activatedrouter:ActivatedRoute,
              public _requerimiento_service:RequerimientoService) {
        
    this._requerimiento_service.GetVehiculoByPlaca(this._requerimiento_service.token)                
    this._requerimiento_service.getActivitiesByLine(this._requerimiento_service.token)    
    this._requerimiento_service.GetDetalle(this._requerimiento_service.token)
  }//constructor

  ngOnInit(): void {
    this.token = this._requerimiento_service.token
    this.get_vehiculo = this._requerimiento_service.vehiculo
    this.get_actividades = this._requerimiento_service.actividades
    this.get_detalle = this._requerimiento_service.detalles
  }

}
