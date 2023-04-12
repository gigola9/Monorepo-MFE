import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@store/ui';

import { HttpClientModule } from '@angular/common/http';
import { CartRoutingModule } from './cart-routing.module';

import * as fromCartContainer from "./containers";


@NgModule({
  declarations: [
    ...fromCartContainer.containers
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule,
    UiModule
  ]
})
export class CartModule { }
