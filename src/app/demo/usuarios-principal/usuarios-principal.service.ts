import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComerciosModel } from '../models/comerciosModel.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosPrincipalService {

  headers: any;

  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-type': 'application/json;charset=utf8'
      // 'Authorization': this.idtoken
      // 'DeviceKey' : this.idDevice,
      // 'AccessToken' : this.tokenAcess
    });
  }

    //Obtener Combo Comercio
    // comercios_listar(): Observable<ComerciosModel[]> {

    //   return this.httpClient.get<ComerciosModel[]>('https://v5yco0dws5.execute-api.us-west-2.amazonaws.com/Stage/v1/comercios', { headers: this.headers });
    // }
}
