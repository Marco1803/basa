import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
//modelos  
import { pagolinkGenerarCabModel } from '../../models/pagolinkGenerarModel.model';
import { pagolinkGenerarCustomDataModel } from '../../models/pagolinkGenerarModel.model';
import { pagolinkGenerarCustomModel } from '../../models/pagolinkGenerarModel.model';
import { cotizacionModel } from '../../models/cotizacionModel.model';
import Swal from 'sweetalert2';
import { PagolinkPrincipalService } from '../pagolink-principal.service';

@Component({
  selector: 'app-pagolink-generar',
  templateUrl: './pagolink-generar.component.html',
  styleUrls: ['./pagolink-generar.component.scss']
})
export class PagolinkGenerarComponent implements OnInit {

  //form groups
  pagolinkGenerateForm: FormGroup;
  cotizaProducto : cotizacionModel[] = [];
  total : number = 0

  constructor(
        //form
        private formBuilder: FormBuilder,
        //servicio
        public _pagolinkPrincipalService : PagolinkPrincipalService
  ) { }

  ngOnInit(): void {
    this.  inicializarForms();
  }

  inicializarForms() {
    this.pagolinkGenerateForm = this.formBuilder.group({
      externalId : new FormControl(''),
      orderType: new FormControl(''),
      description: new FormControl(''),
      expirationDate : new FormControl(''),
      amount: new FormControl(''),
      customData: new FormControl(''),
      customer: new FormControl(''),
      edad: new FormControl(''),
      nroFactura: new FormControl(''),
      direccion: new FormControl(''),
      dni: new FormControl(''),
      colorFavorito: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      documentType: new FormControl(''),
      documentNumber: new FormControl('')
    });
  }
  
  generarPagoLink(){
    Swal.fire({
      title: 'Espere por favor  ...',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });

    // Obtengo el string previamente salvado y luego
    let cotizaProducto = localStorage.getItem('cotizacion');
    this.cotizaProducto =  JSON.parse(cotizaProducto);
    console.log('objetoObtenido: ', JSON.parse(cotizaProducto));

    let suma = 0;
    this.cotizaProducto.forEach((value, index) => {
      suma += value.subtotalPrice;
      this.total = suma;
    });

    let pagolink: pagolinkGenerarCabModel = new pagolinkGenerarCabModel();
    pagolink.amount = this.total;
    pagolink.description = this.pagolinkGenerateForm.get('description').value
    pagolink.expirationDate = this.pagolinkGenerateForm.get('expirationDate').value
    pagolink.externalId = 'f6cc017e-8e65-4fd1-9202-760861fd2ed9';
    pagolink.orderType = 'SINGLEPAY';

    let pagolinkCustomData: pagolinkGenerarCustomDataModel = new pagolinkGenerarCustomDataModel();
    pagolinkCustomData.colorFavorito = '';
    pagolinkCustomData.direccion ='';
    pagolinkCustomData.dni ='';
    pagolinkCustomData.edad = 0;
    pagolinkCustomData.nroFactura ='';

    let pagolinkCustom: pagolinkGenerarCustomModel = new pagolinkGenerarCustomModel();
    pagolinkCustom.documentNumber = '',
    pagolinkCustom.documentType = 'NATIONAL_ID',
    pagolinkCustom.email = '',
    pagolinkCustom.firstName = '',
    pagolinkCustom.lastName = '',
    pagolinkCustom.phoneNumber = ''

 
    pagolink.customData = pagolinkCustomData;
    pagolink.customer = pagolinkCustom;
    pagolink.products = this.cotizaProducto;

    console.log(pagolink)

     //Procesar Data


    this._pagolinkPrincipalService.pagolink_procesar(pagolink)
      .subscribe(
        (data) => {
          alert('procesado');
          console.log(data);
          Swal.close();
        });
        this.  inicializarForms();
    //console.log(pagolink);
  }
 

}
