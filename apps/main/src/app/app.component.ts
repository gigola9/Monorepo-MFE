import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'store-root',
  templateUrl: './app.component.html',
  styles: [``]
})
export class AppComponent {
  title = 'cycle';
  todos: any[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<any[]>('/api/todos').subscribe((m: any) => (this.todos = m));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }

  onButtonClick() {
    console.log(1);
  }
}
