import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { UsuariosRouterModule } from './usuarios-router.module';
import { UsuariosComponent } from './usuarios.component';


@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRouterModule,
    SharedModule,
    DataTablesModule
  ]
})
export class UsuariosModule { }
