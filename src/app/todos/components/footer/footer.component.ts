import { Component, computed } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FilterEnum } from '../../types/filter.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  filterSig = this.todosService.fiterSig;
  filterEnum = FilterEnum;

  activeCount = computed(() => {
    return this.todosService.todoSig().filter((todo) => !todo.isCompleted)
      .length;
  });

  noTodosClass = computed(() => this.todosService.todoSig().length === 0);

  itemsLeftText = computed(
    () => `item${this.activeCount() !== 1 ? 's' : ''} left`
  );

  constructor(public todosService: TodoService) {}

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
}
