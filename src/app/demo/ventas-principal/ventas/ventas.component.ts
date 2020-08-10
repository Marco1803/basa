import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { productosListarModel } from '../../models/productosListarModel.model';
//servicios
//modal
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
//imagen
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//modelos
import { productosMovModel } from '../../models/productosMovModel.model';
import { estadoModel } from '../../models/estadoModel.model';

@Component({
    selector: 'app-ventas',
    templateUrl: './ventas.component.html',
    styleUrls: ['./ventas.component.scss'],
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal]
})

export class VentasComponent implements OnInit {
    //Variables

    //form groups

    constructor(
    ) {
    }

    ngOnInit(): void {
    }

}
