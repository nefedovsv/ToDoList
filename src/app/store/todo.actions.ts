import { Todo } from './../interfaces/todo';
import { createAction, props } from '@ngrx/store';

export const loadTodoList = createAction('[Todo] Load TodoList');


export const addNewTask = createAction(
  '[Todo] Add new task',
  props<{ newTask: Todo }>()
);

