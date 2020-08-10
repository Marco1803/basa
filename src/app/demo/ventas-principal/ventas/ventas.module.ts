import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { VentasComponent } from './ventas.component';
import { VentasRouterModule } from './ventas-router.module';


@NgModule({
  declarations: [
    VentasComponent
  ],
  imports: [
    CommonModule,
    VentasRouterModule,
    SharedModule,
    DataTablesModule
  ]
})
export class VentassModule { }
