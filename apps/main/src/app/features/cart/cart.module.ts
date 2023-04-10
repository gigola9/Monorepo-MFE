import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';

import * as fromCartContainer from "./containers";


@NgModule({
  declarations: [
    ...fromCartContainer.containers
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
