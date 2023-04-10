import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromCartContainer from "./containers";

const routes: Routes = [
  {
    path: '', component: fromCartContainer.CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
