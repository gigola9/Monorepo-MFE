import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@store/ui';
import { HttpClientModule } from '@angular/common/http';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    UiModule
  ],
  providers: [],
})
export class RemoteEntryModule {}
