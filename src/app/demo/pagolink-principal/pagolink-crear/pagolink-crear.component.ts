import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
//modelos
import { cotizacionCustomModel } from '../../models/cotizacionModel.model';
import { cotizacionModel } from '../../models/cotizacionModel.model';
//servicios
import { PagolinkPrincipalService } from '../pagolink-principal.service';
//extras
import swal from 'sweetalert2';
import { productosListarModel } from '../../models/productosListarModel.model';

@Component({
  selector: 'app-pagolink-crear',
  templateUrl: './pagolink-crear.component.html',
  styleUrls: ['./pagolink-crear.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class PagolinkCrearComponent implements OnInit {

  //form groups
  productoForm: FormGroup;

  //variables
  sumaTotal: number = 0;
  sumaCant: number = 0;

  //arrays
  listaProdcutos: productosListarModel[] = [];
  listaProdcutosCotiza: cotizacionModel[] = [];



  constructor(
    private formBuilder: FormBuilder,
    public _pagolinkPrincipalService: PagolinkPrincipalService
  ) {
    this.inicializarForms();
  }

  inicializarForms() {
    this.productoForm = this.formBuilder.group({
      comercioid: new FormControl(''),
      nombre: new FormControl(''),
      ruc: new FormControl(''),
      comerciogrupoid: new FormControl(''),
      nombrecontacto: new FormControl(''),
      telefono: new FormControl(''),
      correo: new FormControl(''),
      estado: new FormControl(''),
      cant:new FormControl('')
    });
  }

  ngOnInit(): void {
    this.obtenerProdcutos();
  }

  //Obtener Datos
  obtenerProdcutos() {
    swal.fire({
      title: 'Espere por favor  ...',
      onBeforeOpen: () => {
        swal.showLoading()
      }
    });
    this._pagolinkPrincipalService.productos_listar()
      .subscribe(
        (data) => {
          console.log('prodcutos');
          console.log(data);
          this.listaProdcutos = data;
          swal.close();
        });
  }

  envio(product) {

    localStorage.setItem('cotizacion', '');

    // let jsonsend = {
    //   telefono: this.comercioForm.get('telefono').value
    // }

    let cotizacion: cotizacionModel = new cotizacionModel();
    console.log(this.productoForm.get('cant').value);
    let cantidad:any;
    cantidad = parseInt(this.productoForm.get('cant').value);

    if (cantidad) {
      if( typeof cantidad != 'string' ){


      console.log('entre');
      cotizacion.productId = '';
      cotizacion.sku = '';
      cotizacion.productName = product['name'];
      cotizacion.productDescription = 'Hola';
      cotizacion.image = product['image'];
      cotizacion.quantity = parseFloat(this.productoForm.get('cant').value);
      cotizacion.unitPrice = parseInt(product['amount']);
      cotizacion.subtotalPrice = (parseFloat(this.productoForm.get('cant').value) * parseInt(product['amount']) );
      console.log('subtotalPrice');
      console.log((parseFloat(this.productoForm.get('cant').value) * parseInt(product['amount']) ));

      let customData: cotizacionCustomModel = new cotizacionCustomModel();
      customData.booleano = false;
      customData.decimal =0;
      customData.entero =0;
      customData.k1 ='';
      customData.k2 ='';

      cotizacion.customData = customData;

      this.listaProdcutosCotiza.push(cotizacion)
      

      console.log(this.listaProdcutosCotiza);

      let sumaTotal = 0;
      let sumaCant = 0;
      this.listaProdcutosCotiza.forEach((value, index) => {
        sumaTotal += value.subtotalPrice;
        this.sumaTotal = sumaTotal;

        sumaCant += value.quantity;
        this.sumaCant = sumaCant;
      });
      this.inicializarForms();
    }else {
      alert('ingrese valor numerico');
    }
    } else {
      alert('ingrese valor numerico');
    }
  }

  procesar() {
    console.log('productos', this.listaProdcutosCotiza) 

    // Guardo el objeto como un string
    localStorage.setItem('cotizacion', JSON.stringify(this.listaProdcutosCotiza));
  }

  numberOnly(event) : boolean{
    // let key = window.Event ? event.which : event.keyCode
    // return ((key <= 80) || (key >= 190));

    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  convertir(number){
    let nuevoValor = parseFloat(number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    return nuevoValor;
  }
}
