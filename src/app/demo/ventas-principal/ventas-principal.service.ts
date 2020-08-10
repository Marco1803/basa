import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComerciosModel } from '../models/comerciosModel.model';
import { productosListarModel } from '../models/productosListarModel.model';
import { productosMovModel } from '../models/productosMovModel.model';

@Injectable({
  providedIn: 'root'
})
export class VentasPrincipalService {

  headers: any;

  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-type': 'application/json;charset=utf8'
      // 'Authorization': this.idtoken
      // 'DeviceKey' : this.idDevice,
      // 'AccessToken' : this.tokenAcess
    });
  }

}
