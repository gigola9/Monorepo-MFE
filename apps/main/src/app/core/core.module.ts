import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';
import * as fromComponents from './components';



@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule {}
