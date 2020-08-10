import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComerciosModel } from '../models/comerciosModel.model';
import { productosListarModel } from '../models/productosListarModel.model';
import { pagolinkGenerarCabModel } from '../models/pagolinkGenerarModel.model';

@Injectable({
  providedIn: 'root'
})
export class PagolinkPrincipalService {

  headers: any;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-type': 'application/json;charset=utf8'
      // 'Authorization': this.idtoken
      // 'DeviceKey' : this.idDevice,
      // 'AccessToken' : this.tokenAcess
    });
  }

  //Obtener pagolink
  pagolink_listar(NumeroPag): Observable<pagolinkGenerarCabModel[]> {
    return this.httpClient.get<pagolinkGenerarCabModel[]>('https://apiqa.ecore.mobi/api.osm/api/v1/order/filter/10/'+NumeroPag+'?merchantId=341198214', { headers: this.headers });
  }

  //Obtener productos
  productos_listar(): Observable<productosListarModel[]> {
    return this.httpClient.get<productosListarModel[]>('https://ndg2k0m3fl.execute-api.us-west-2.amazonaws.com/Stage/v1/merchant_products', { headers: this.headers });
  }


    //procesar pagolink
    pagolink_procesar(pagolink): Observable<pagolinkGenerarCabModel[]> {
      return this.httpClient.post<pagolinkGenerarCabModel[]>('https://apiqa.ecore.mobi/api.osm/api/v1/order/create/341198214',pagolink, { headers: this.headers });
    }

}
