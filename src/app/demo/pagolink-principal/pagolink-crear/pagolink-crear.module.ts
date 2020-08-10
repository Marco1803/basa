import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagolinkCrearRouterModule } from './pagolink-crear-route.module';
import {SharedModule} from '../../../theme/shared/shared.module';
import { PagolinkCrearComponent } from './pagolink-crear.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagolinkCrearRouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagolinkCrearModule { } 
