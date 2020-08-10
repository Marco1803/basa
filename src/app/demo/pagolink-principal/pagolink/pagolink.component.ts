import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PagolinkPrincipalService } from '../pagolink-principal.service';
import { ComerciosModel } from '../../models/comerciosModel.model';
import { pagolinkGenerarCabModel } from '../../models/pagolinkGenerarModel.model';

@Component({
  selector: 'app-pagolink',
  templateUrl: './pagolink.component.html',
  styleUrls: ['./pagolink.component.scss']
})


export class PagolinkComponent implements OnInit {

    //arrays
    listaPagolink: pagolinkGenerarCabModel[] = [];
    NumeroPag : number = 0;

  constructor(
    public _pagolinkPrincipalService: PagolinkPrincipalService
  ) { }

  ngOnInit(): void {
    this.obtenerPagolink();
    this.NumeroPag = 0;
  }

  //Obtener Pagolink
  obtenerPagolink() {
    Swal.fire({
      title: 'Espere por favor  ...',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });
    this._pagolinkPrincipalService.pagolink_listar(1)
      .subscribe(
        (data) => {
          console.log('comercio');
          console.log(data);
          this.listaPagolink = data;
          Swal.close();
        });
  }
  
  nextPage(numPag){
    console.log(numPag);
    this.NumeroPag=numPag+1;
    Swal.fire({
      title: 'Espere por favor  ...',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });
    this._pagolinkPrincipalService.pagolink_listar(this.NumeroPag)
      .subscribe(
        (data) => {
          console.log('comercio');
          console.log(data);
          this.listaPagolink = data;

          Swal.close();
        });
  }

  beforePage(numPag){
    this.NumeroPag=numPag-1;
    Swal.fire({
      title: 'Espere por favor  ...',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });
    this._pagolinkPrincipalService.pagolink_listar(this.NumeroPag)
      .subscribe(
        (data) => {
          console.log('comercio');
          console.log(data);
          this.listaPagolink = data;

          Swal.close();
        });
  }

}
