import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'sample-page',
        pathMatch: 'full'
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
       //nuevo
      {
        path: 'productos-principal',
        loadChildren: () => import('./demo/productos-principal/productos-principal.module').then(module => module.ProductosPrincipalModule)
      },
      {
        path: 'pagolink-principal',
        loadChildren: () => import('./demo/pagolink-principal/pagolink-principal.module').then(module => module.PagolinkPrincipalModule)
      },
      {
        path: 'usuarios-principal',
        loadChildren: () => import('./demo/usuarios-principal/usuarios-principal.module').then(module => module.UsuariosPrincipaModule)
      },
      {
        path: 'ventas-principal',
        loadChildren: () => import('./demo/ventas-principal/ventas-principal.module').then(module => module.VentasPrincipalModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
