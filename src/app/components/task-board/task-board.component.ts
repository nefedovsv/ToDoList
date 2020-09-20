import { Todo, Selector } from './../../interfaces/todo';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreFacade } from 'src/app/store/todo.facade';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectorComponent } from '../selector/selector.component';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  public isVisible = false;
  public currentSelector: Selector;
  public todos$: Observable<Todo[]>;
  public selectors$: Observable<Selector[]>;
  @ViewChild(SelectorComponent, { static: false })
  private selectorComponent: SelectorComponent;

  constructor(private facade: StoreFacade) {}

  ngOnInit(): void {
    this.selectors$ = this.facade.selectors$;
    this.todos$ = this.facade.selectedTodoList$;
  }

  changeStatus(id: number) {
    this.facade.changeTaskStatus(id);
    this.updateBySelector(this.currentSelector);
  }

  updateBySelector(selector: Selector) {
    this.facade.setSelector(selector);
    this.todos$ = this.facade.selectedTodoList$;
  }

  setCurrentSelector(selector: Selector) {
    this.currentSelector = selector;
  }

  trackByFn(index, item) {
    return item.title;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {  
    this.facade.addNewTab(this.selectorComponent.form.value);
    this.isVisible = false;
    this.selectorComponent.form.reset()
  }

  handleCancel(): void {
    this.isVisible = false;
    this.selectorComponent.form.reset();
  }

  closeTab(selectorName: string): void {
    this.facade.removeSelector(selectorName);
  }
}
