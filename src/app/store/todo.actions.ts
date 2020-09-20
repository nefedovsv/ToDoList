import { select } from '@ngrx/store';
import { Todo, Selector } from './../interfaces/todo';
import { createAction, props } from '@ngrx/store';

export const addNewTask = createAction(
  '[Todo] Add new task',
  props<{ newTask: Todo }>()
);

export const addNewTab = createAction(
  '[Todo] Add new Tab',
  props<{ newTab: Selector }>()
);

export const changeTaskStatus = createAction(
  '[Todo] Change task status',
  props<{ id: number }>()
);

export const setSelector = createAction(
  '[Todo] Change task status',
  props<{ selector: Selector }>()
);
