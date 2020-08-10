import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { PagolinkComponent } from './pagolink.component';
import { PagolinkRouterModule } from './pagolink-route.module';


@NgModule({
  declarations: [
    PagolinkComponent
  ],
  imports: [
    CommonModule,
    PagolinkRouterModule,
    SharedModule,
    DataTablesModule
  ]
})
export class PagolinkModule { }
