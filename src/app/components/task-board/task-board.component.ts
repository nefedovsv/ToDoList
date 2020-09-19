import { Todo } from './../../interfaces/todo';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StoreFacade } from 'src/app/store/todo.facade';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  public todos$: Observable<Todo[]>;
  constructor(private facade: StoreFacade) {}

  ngOnInit(): void {
    this.todos$ = this.facade.todos$;
  }

  changeStatus(index: number) {
    console.log('!!!', index);
  }

  trackByFn(index, item) {    
    return item.title; 
  }
}
