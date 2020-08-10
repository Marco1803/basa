import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { PagolinkGenerarComponent } from './pagolink-generar.component';
import { PagolinkGenerarRouterModule } from './pagolink-generar-router.module';
import {ArchwizardModule} from 'angular-archwizard';
import { PagolinkCrearComponent } from '../pagolink-crear/pagolink-crear.component';



@NgModule({
  declarations: [
    PagolinkGenerarComponent,
    PagolinkCrearComponent
  ],
  imports: [
    CommonModule,
    PagolinkGenerarRouterModule,
    SharedModule,
    DataTablesModule,
    ArchwizardModule
  ]
})
export class PagolinkGenerarModule { }
