import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


