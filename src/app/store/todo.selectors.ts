import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodoState } from "./todo.reducer";

const selectTodoList = createFeatureSelector<ITodoState>('todoList');


export const getTodoList = createSelector(
  selectTodoList,
  (state: ITodoState) => state.todoList
);


