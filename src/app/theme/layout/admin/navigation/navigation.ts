import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'feather icon-align-left',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     },
  //     {
  //       id: 'productos',
  //       title: 'Lista de Productos',
  //       type: 'item',
  //       url: '/productos-principal/productos'
  //     },
  //     {
  //       id: 'pagolink-crear',
  //       title: 'Crear Pagolink',
  //       type: 'item',
  //       url: '/pagolink-principal/pagolink-crear'
  //     }
  //   ]
  // },
  {
    id: 'admin-panel',
    title: 'Admin Panel',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'pagolink-principal',
        title: 'Pago Link',
        type: 'collapse',
        icon: 'feather icon-activity',
        children: [
          {
            id: 'pagolink',
            title: 'Lista Pagolink',
            type: 'item',
            url: '/pagolink-principal/pagolink'
          },
          {
            id: 'pagolink-generar',
            title: 'Generar Pagolink',
            type: 'item',
            url: '/pagolink-principal/pagolink-generar'
          }
        ]
      },
      {
        id: 'productos-principal',
        title: 'Productos',
        type: 'collapse',
        icon: 'feather icon-package',
        children: [
          {
            id: 'productos',
            title: 'Lista Productos',
            type: 'item',
            url: '/productos-principal/productos'
          }
        ]
      },
      {
        id: 'usuarios-principal',
        title: 'Usuarios',
        type: 'collapse',
        icon: 'feather icon-package',
        children: [
          {
            id: 'usuarios',
            title: 'Lista Usuarios',
            type: 'item',
            url: '/usuarios-principal/usuarios'
          }
        ]
      },
      {
        id: 'ventas-principal',
        title: 'Ventas',
        type: 'collapse',
        icon: 'feather icon-package',
        children: [
          {
            id: 'ventas',
            title: 'Lista de Ventas',
            type: 'item',
            url: '/ventas-principal/ventas'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
