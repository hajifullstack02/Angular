import {  Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class OrdersService{
 getOrders(){
    return [
      {
        OrderID: 1,
        OrderName: 'Veg-Food',
        OrderLocation: 'Hyderabad',
      },
      {
        OrderID: 2,
        OrderName: 'Non-Veg-Food',
        OrderLocation: 'Hyderabad',
      },
    ];
 }

 
  getCustomersList(){
    return [
      {
        OrderID: 1,
        CustomerName : "samu",
        CustomerFoodName : ["Roti","paneer"],
        CustomerAge  : 25,
        CustomerGender : 'Male',
        CusotmerLocation : 'hyd',
        Information   : "He is a software engineer from Madhapur"
      },
      {
        OrderID: 2,
        CustomerName : "Ram",
        CustomerFoodName : ["CB","Non-veg-curry"],
        CustomerAge  : 24,
        CustomerGender : 'Male',
        CusotmerLocation : 'hyd',
         Information   : "He is a HR from hitech-city"
      },
    ];
  }

}