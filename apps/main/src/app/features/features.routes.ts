import { Routes } from '@angular/router';

export const featureRoutes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'products',
    loadChildren: () => import('products/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'home',
    loadChildren: () => import('home/Module').then((m) => m.RemoteEntryModule),
  }
]




