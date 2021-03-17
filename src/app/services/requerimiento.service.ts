import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequerimientoService {  

  respuesta:any
  line:any[] = []
  vehiculo:any[] = []
  detalles:any[] = []
  actividades:any[] = []
  token:string  

  constructor(private http:HttpClient, public router:Router) { 
    console.log("El servicio esta listo");
            
  }//constructor

  verificar_credenciales(credenciales){

    var x = this.http.post('http://190.156.254.66:50026/api/v1/login',credenciales)
    .subscribe((res:any) =>{
      this.respuesta = res  
      if(this.respuesta.error == false){
        this.token = this.respuesta.data
        this.router.navigate(['home'])
      }   
    })

  }//verficar_credenciales

  getActivitiesByLine(token){

    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ token
    });

    this.http.get('http://190.156.254.66:50026/api/v1/apl?linea=1', {headers})
    .subscribe((res:any)=>{      
      this.actividades = res.data     
    })
  }//getActivitiesByLine

  agregar_registro(body,token){

    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ token
    });

    this.http.post('http://190.156.254.66:50026/api/v1/registro_inspecciones',body,{headers})
    .subscribe((res)=>{
      console.log('Se agrego un registro');
      
      console.log(res);    
    })
  }//agregar registro

  agregar_detalle(body,token){

    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ token
    });

    this.http.post('http://190.156.254.66:50026/api/v1/detalle_inspecciones',body,{headers})
    .subscribe((res)=>{
      console.log('Se agrego un detalle');      
      console.log(res);    
    })
  }//agregar detalle

  GetVehiculoByPlaca(token){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ token
    });
    this.http.get('http://190.156.254.66:50026/api/v1/vehiculos?placa=BZO925',{headers})
    .subscribe((res:any)=>{
      this.vehiculo = res.data
    })
  }//GetVehiculoByPlaca

  GetDetalle(token){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ token
    });
    this.http.get('http://190.156.254.66:50026/api/v1/detalle_inspecciones',{headers})
    .subscribe((res:any)=>{
      this.detalles = res.data
    })
  }//GetVehiculoByPlaca
  
}

  
