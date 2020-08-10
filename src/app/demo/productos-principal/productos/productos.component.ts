import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { productosListarModel } from '../../models/productosListarModel.model';

//servicios
import { ProductosPrincipalService } from '../productos-principal.service';

//modal
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

//imagen
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

//modelos
import { productosMovModel } from '../../models/productosMovModel.model';
import { estadoModel } from '../../models/estadoModel.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class ProductosComponent implements OnInit {
  //Variables
  listaProductos: productosListarModel[] = []
  creaProd:productosMovModel[] = [];
  imagePath:SafeResourceUrl='';

    //form groups
    productoForm: FormGroup;

    listaEstado: estadoModel[] = [
      new estadoModel(1, "ACTIVO"),
      new estadoModel(0, "INACTIVO")
    ];

  constructor(
    public _productosPrincipalService: ProductosPrincipalService,
    //modal
    config: NgbModalConfig,
    private modalService: NgbModal,
    //form
    private formBuilder: FormBuilder,
    //imagen
    private _sanitizer: DomSanitizer
  ) {
    //modal
    config.backdrop = 'static';
    config.keyboard = false;

    //inicializado
    this.inicializarForms();

  }

  inicializarForms() {
    this.productoForm = this.formBuilder.group({
      merchantProductId: new FormControl(''),
      merchantId: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      currency: new FormControl(''),
      amount: new FormControl(''),
      status: new FormControl('ACTIVO'),
      image: new FormControl(''),
      sku: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  //Obtener Datos
  obtenerProductos() {
    Swal.fire({
      title: 'Espere por favor  ...',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });
    this._productosPrincipalService.productos_listar()
      .subscribe(
        (data) => {
          console.log('productos');
          console.log(data);
          this.listaProductos = data;

console.log(data[0].image)
            //codigifica imagen regreso
            // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            // + data[0].image.base64string);

          Swal.close();
        });
  }

  open(content) {
    this.modalService.open(content);
  }
  close(content) {
    this.modalService.dismissAll(content);
  }


  grabarProdcuto() {

    let prod: productosMovModel = new productosMovModel();
    prod.amount = parseFloat(this.productoForm.get('amount').value);
    prod.currency = 'HNL';
    prod.description = this.productoForm.get('description').value;
    prod.image= this.imageSrc;
    prod.merchantId = parseInt(this.productoForm.get('merchantId').value);
    prod.name = this.productoForm.get('name').value;
    prod.sku = this.productoForm.get('sku').value;
    prod.status = this.productoForm.get('status').value;   
    // this.creaProd.push(prod)
 


    this._productosPrincipalService.productos_agregar(prod).subscribe(
      (response: productosMovModel[]) => {
        alert('guardado');
      },
    );
  }

  //convertir imagen a base 64
  private imageSrc: string = '';

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }




}
