import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormComponent, TaskBoardComponent } from './components';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from "./store";
import { StoreFacade } from './store/todo.facade';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { localStorageSync } from 'ngrx-store-localstorage';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SelectorComponent } from './components/selector/selector.component';

registerLocaleData(en);

export function localStorageSyncReducer(reducer) {
  return localStorageSync({
    keys: ['todoList'],
    rehydrate: true,
  })(reducer);
}

@NgModule({
  declarations: [AppComponent, TaskBoardComponent, FormComponent, SelectorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzDividerModule,
    NzInputModule,
    NzCardModule,
    NzIconModule,
    NzTabsModule,
    NzModalModule,
    NzSelectModule,
    StoreModule.forRoot(
      { todoList: todoReducer },
      { metaReducers: [localStorageSyncReducer] },
    ),
  ],
  providers: [StoreFacade, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
