import { StoreFacade } from './../../store/todo.facade';
import { Todo } from './../../interfaces/todo';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private facade: StoreFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      priority: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
    });
  }
  submit() {
    const newTask: Todo = {
      title: this.form.value.title,
      description: this.form.value.description,
      priority: this.form.value.priority,
      color: this.form.value.color,
      completed: false,
    };
    this.facade.addNewTask(newTask);
    this.form.reset();
    this.router.navigate(['']);
  }
}
