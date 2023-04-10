import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromServices from "./services";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...fromServices.services
  ]
})
export class SharedModule { }
