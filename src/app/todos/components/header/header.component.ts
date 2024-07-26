import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  
  text: string = '';

  constructor( private toDoService: TodoService) {

  }

  changeText(event:Event): void {
    const target = event.target as HTMLInputElement;

    this.text = target.value;
  }

  addTodo() {
    this.toDoService.addTodo(this.text);
    this.text= '';
  }
}
