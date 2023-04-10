import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@store/ui';

// import { httpInterceptorProviders } from '../core/interceprots';
import * as fromGuards from './guards';
import * as fromServices from "./services";
import * as fromAuthComponents from "./components";

@NgModule({
  declarations: [
    ...fromAuthComponents.components
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiModule
  ],
  providers: [
    ...fromGuards.guards,
    ...fromServices.services,
    // httpInterceptorProviders
  ]
})
export class AuthModule { }
