import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagolinkCrearComponent } from './pagolink-crear.component';


const routes: Routes = [
  {
    path: '',
    component: PagolinkCrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagolinkCrearRouterModule { }
