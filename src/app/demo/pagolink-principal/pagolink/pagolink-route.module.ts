import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagolinkComponent} from './pagolink.component';

const routes: Routes = [
  {
    path: '',
    component: PagolinkComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagolinkRouterModule { }
