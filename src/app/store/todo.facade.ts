import { Todo } from './../interfaces/todo';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState } from "./todo.reducer";
import { getTodoList } from "./todo.selectors";
import { addNewTask } from './todo.actions';

@Injectable()
export class StoreFacade {
  public todos$ = this.store.select(getTodoList);

  constructor(private store: Store<{ todo: ITodoState }>) {}

  public addNewTask(newTask: Todo) {
    this.store.dispatch(addNewTask({ newTask }));
  }
}
