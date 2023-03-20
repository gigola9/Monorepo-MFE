import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  todos: any[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  getData(): any[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
