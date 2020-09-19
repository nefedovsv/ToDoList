import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodoState } from "./todo.reducer";

const todoKey = createFeatureSelector<ITodoState>('todoList');

export const getTodoList = createSelector(
  todoKey,
  (state: ITodoState) => state.todoList
);

export const getSelectors = createSelector(
  todoKey,
  (state: ITodoState) => state.selectors
);

export const getSelectedTodoList = createSelector(
  todoKey,
  (state: ITodoState) => {
    if (state.currentSelector) {
      const selector = state.currentSelector    
      return state.todoList.filter(todo => {
        if (state.currentSelector.name === 'All') return todo;
        return todo[selector.field] === selector.filterValue
      })
    }
  }
);