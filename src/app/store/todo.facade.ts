import { Todo, Selector } from './../interfaces/todo';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState } from "./todo.reducer";
import { getSelectedTodoList, getSelectors, getTodoList } from "./todo.selectors";
import {
  addNewTask,
  changeTaskStatus,
  setSelector,
  addNewTab,
} from './todo.actions';

@Injectable()
export class StoreFacade {
  public todos$ = this.store.select(getTodoList);
  public selectors$ = this.store.select(getSelectors);
  public selectedTodoList$ = this.store.select(getSelectedTodoList);

  constructor(private store: Store<{ todo: ITodoState }>) {}

  public addNewTask(newTask: Todo) {
    this.store.dispatch(addNewTask({ newTask }));
  }

  public addNewTab(newTab: Selector) {
    this.store.dispatch(addNewTab({ newTab }));
  }

  public changeTaskStatus(id: number) {
    this.store.dispatch(changeTaskStatus({ id }));
  }

  public setSelector(selector: Selector) {
    this.store.dispatch(setSelector({ selector }));
  }
}
