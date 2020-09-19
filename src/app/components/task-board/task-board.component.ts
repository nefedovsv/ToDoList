import { Todo, Selector } from './../../interfaces/todo';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StoreFacade } from 'src/app/store/todo.facade';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  public isVisible = false;
  public currentSelector: Selector;
  public todos$: Observable<Todo[]>;
  public selectors$: Observable<Selector[]>;

  constructor(private facade: StoreFacade) {}

  ngOnInit(): void {
    this.todos$ = this.facade.selectedTodoList$;
    this.selectors$ = this.facade.selectors$;
  }

  changeStatus(id: number) {
    this.facade.changeTaskStatus(id);
    this.updateBySelector(this.currentSelector);
  }

  updateBySelector(selector: Selector) {
    this.facade.setSelector(selector);
    this.todos$ = this.facade.selectedTodoList$;
  }

  setCurrentSelector(selector: Selector) {
    this.currentSelector = selector;
  }

  trackByFn(index, item) {
    return item.title;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
