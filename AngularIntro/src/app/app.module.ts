import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CompAComponent} from '../app/Comp-A/compA.component';
import { FormsModule } from '@angular/forms';
import { CompBComponent } from './comp-b/comp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
