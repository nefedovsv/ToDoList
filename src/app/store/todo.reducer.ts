import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo, Selector } from "../interfaces/todo";


export interface ITodoState {
  todoList: Todo[];
  selectors: Selector[];
  currentSelector: Selector;
}

export const todoInitialState: ITodoState = {
  todoList: [],
  selectors: [
    {
      name: 'All',
      field: 'title',
      filterValue: null,
    },
    {
      name: 'Active',
      field: 'completed',
      filterValue: false,
    },
    {
      name: 'Closed',
      field: 'completed',
      filterValue: true,
    },
  ],
  currentSelector:   {
      name: 'All',
      field: 'title',
      filterValue: null,
    },
};

export const todoReducer = createReducer(
  todoInitialState,

  on(actions.addNewTask, (state, action) => {
    return {
      ...state,
      todoList:[ ...state.todoList, action.newTask]
    };
  }),

  on(actions.changeTaskStatus, (state, action) => {
    const updatetodoList = state.todoList.map((todo: Todo) => {
      if (todo.id === action.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });     
    return {
      ...state,
      todoList: updatetodoList,
    };
  }),

  on(actions.setSelector, (state, action) => {
    return {
      ...state,
      currentSelector: action.selector
    };
  })
);
