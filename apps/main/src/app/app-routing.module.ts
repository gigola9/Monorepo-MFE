import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { featureRoutes } from './features/features.routes';
import * as fromCoreContainers from './core/containers';

const routes: Routes = [
  {
    path: "",
    component:  fromCoreContainers.MainComponent,
    children: [...featureRoutes]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
