import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from "../interfaces/todo";


export interface ITodoState {
  todoList: Todo[];
}

export const todoInitialState: ITodoState = {
  todoList: [
    {
      title: 'hello',
      description: 'hi',
      priority: 1,
      color: 'red',
      completed: false,
    }
  ],
};

export const todoReducer = createReducer(
  todoInitialState,

  on(actions.loadTodoList, (state) => {
    return {
      ...state,
    };
  })
);
