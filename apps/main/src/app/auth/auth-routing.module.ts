import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromAuthComponents from "./components";

const routes: Routes = [
  {
    path: 'login',
    // canActivate: [fromGuards.LoggedInGuard],
    component: fromAuthComponents.LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
