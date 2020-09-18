import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState } from "./todo.reducer";
import { getTodoList } from "./todo.selectors";

@Injectable()
export class TodoListStoreFacade {
  public todo$ = this.store.select(getTodoList);

  constructor(
    private store: Store<{ todoList: ITodoState }>,
  ) {
    console.log(this.store);
  }
}
