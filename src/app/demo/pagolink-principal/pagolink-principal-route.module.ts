import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pagolink-crear',
        loadChildren: () => import('./pagolink-crear/pagolink-crear.module').then(module => module.PagolinkCrearModule)
      },
      {
        path: 'pagolink',
        loadChildren: () => import('./pagolink/pagolink.module').then(module => module.PagolinkModule)
      },
      {
        path: 'pagolink-generar',
        loadChildren: () => import('./pagolink-generar/pagolink-generar.module').then(module => module.PagolinkGenerarModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagolinkPrincipaRouterModule { }
