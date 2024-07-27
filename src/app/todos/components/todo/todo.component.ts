import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {

  @Input({required: true}) todo!: TodoInterface;
  @Input({required: true}) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter(); 
  
  editingText: string ='';

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.editingText = this.todo.text;
  }
  
  changeText(event: Event ) {
      const value = (event.target as HTMLInputElement).value;

      this.editingText = value;
  }

  changeTodo() {

    this.todoService.changeTodo(this.todo.id, this.editingText);
    this.setEditingId.emit(null);
  }

  setTodoInEditMode(): void {
    this.setEditingId.emit(this.todo.id);
  }
}
