import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@store/ui';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
