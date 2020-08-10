import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagolinkGenerarComponent} from './pagolink-generar.component';

const routes: Routes = [
  {
    path: '',
    component: PagolinkGenerarComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagolinkGenerarRouterModule { }
