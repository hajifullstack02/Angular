import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { FormsModule } from '@angular/forms';
import { authGuard } from './auth.guard';
import { exitGuard } from './exit.guard';
import { OrdersTestComponent } from './orders-test/orders-test.component';


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
{
  path:'notfound',
  component:NotfoundComponent
},
{
  path:'orders',
  component:OrdersComponent,
  children:[
      {
        path:'orderstest',                         //https://localhost:4200/orders/orderstest
        component:OrdersTestComponent
      }]
},
{
  path:'order-details/:orderID',   // this for params
   
  component:OrderDetailsComponent,
  canActivate:[authGuard],
  canDeactivate:[exitGuard]
},

{
  path:'order-details',         // for query params
   
  component:OrderDetailsComponent
}

]



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    AboutusComponent,
    NotfoundComponent,
    OrdersComponent,
    OrderDetailsComponent,
    OrdersTestComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)        //register the routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
