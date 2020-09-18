import { Component, OnInit } from '@angular/core';
import { TodoListStoreFacade } from "./components/store/todo.facade";
import { Todo } from "./components/interfaces/todo";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todoList';
  todo$: Observable<Todo[]>;

  constructor(
    private store: Store<{ todoList: any }>
  ) {
  }
  ngOnInit(): void {
    this.todo$ = this.store.pipe(select('todoList'));
    this.todo$.subscribe(todo => {
      console.log(todo);
    })



  }
}
