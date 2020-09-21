import { Todo, Selector } from './../interfaces/todo';
import { createAction, props } from '@ngrx/store';

export const addNewTask = createAction(
  '[Todo] Add new task',
  props<{ newTask: Todo }>()
);

export const addNewTab = createAction(
  '[Todo] Add new tab',
  props<{ newTab: Selector }>()
);

export const changeTaskStatus = createAction(
  '[Todo] Change task status',
  props<{ id: number }>()
);

export const setSelector = createAction(
  '[Todo] Set selector',
  props<{ selector: Selector }>()
);

export const removeSelector = createAction(
  '[Todo] Remove selector',
  props<{ selectorName: string }>()
);
