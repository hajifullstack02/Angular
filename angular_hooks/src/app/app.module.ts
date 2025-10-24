import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
