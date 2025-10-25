import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';


//Declaring the routes
const routes: Routes =[
{
  path:'',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path:'homepage',
  component:HomepageComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'aboutus',
  component:AboutusComponent
},


]



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    AboutusComponent,
   
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)        //register the routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
