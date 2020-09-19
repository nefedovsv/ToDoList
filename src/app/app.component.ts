import { Component, OnInit } from '@angular/core';
import { StoreFacade } from "./store/todo.facade";
import { Todo } from "./interfaces/todo";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { ITodoState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private facade: StoreFacade) {}

  ngOnInit(): void {
  }
}
