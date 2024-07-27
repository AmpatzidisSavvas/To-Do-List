import { Component, computed } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../types/filter.enum';
import { TodoComponent } from "../todo/todo.component";

@Component({
  selector: 'app-todos-main',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  editingId: string | null = null;

  constructor(public todoService: TodoService) {}


  visibleTodos = computed(() => {

    const todos = this.todoService.todoSig();
    const filter = this.todoService.fiterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  });

  setEditingId(editingId: string | null) {
    this.editingId = editingId;
  }
}
