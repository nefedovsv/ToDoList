import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent, TaskBoardComponent } from './components';

const routes: Routes = [
  {path: '', redirectTo: 'task-board', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: 'task-board', component: TaskBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
