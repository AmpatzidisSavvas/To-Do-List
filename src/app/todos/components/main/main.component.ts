import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  constructor(public todoService: TodoService) {}
}
