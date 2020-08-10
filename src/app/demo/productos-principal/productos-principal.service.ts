import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComerciosModel } from '../models/comerciosModel.model';
import { productosListarModel } from '../models/productosListarModel.model';
import { productosMovModel } from '../models/productosMovModel.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosPrincipalService {

  headers: any;

  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-type': 'application/json;charset=utf8'
      // 'Authorization': this.idtoken
      // 'DeviceKey' : this.idDevice,
      // 'AccessToken' : this.tokenAcess
    });
  }

    //Obtener productos
    productos_listar(): Observable<productosListarModel[]> {
      return this.httpClient.get<productosListarModel[]>('https://ndg2k0m3fl.execute-api.us-west-2.amazonaws.com/Stage/v1/merchant_products', { headers: this.headers });
    }

    //grabar producto
    productos_agregar(nuevoProducto): Observable<productosMovModel[]> {
      return this.httpClient.post<productosMovModel[]>('https://ndg2k0m3fl.execute-api.us-west-2.amazonaws.com/Stage/v1/merchant_products', nuevoProducto, { headers: this.headers });
    }
}
