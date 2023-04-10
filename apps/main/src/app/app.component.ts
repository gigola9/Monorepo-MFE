import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'store-root',
  template:
  `
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'Store';
}
