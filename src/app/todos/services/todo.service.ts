import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoSig = signal<TodoInterface[]>([]);
  fiterSig = signal<FilterEnum>(FilterEnum.all);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };

    this.todoSig.update((todos) => [...todos, newTodo]);
  }

  changeFilter(filterName: FilterEnum): void {
    this.fiterSig.set(filterName);
  }

  changeTodo(id: string, text: string): void {
    this.todoSig.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }
  removeTodo(id: string) {

    this.todoSig.update(todos => todos.filter(todo => todo.id !== id));
  }

  toggleTodo(id: string) {
    this.todoSig.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    );
  }
}
