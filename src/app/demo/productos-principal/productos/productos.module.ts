import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { ProductosRouterModule } from './productos-router.module';
import { ProductosComponent } from './productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRouterModule,
    SharedModule,
    DataTablesModule
  ]
})
export class ProductosModule { }
