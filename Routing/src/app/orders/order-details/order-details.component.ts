import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(public activateRoute:ActivatedRoute , public orderservice:OrdersService, private router:Router){}


  SelectedCustoemrs :any;

  OrderInfo :any;
  ngOnInit(): void {
                                                               //http://localhost:4200
    this.activateRoute.params.subscribe((result:any)=>{
        console.log("From orderdetails " , result);  //{orderid:1}


        this.OrderInfo = result;//{orderId:1}

        let custoemrsList = this.orderservice.getCustomersList();
        this.SelectedCustoemrs = custoemrsList.filter((customer)=>{
           return customer.OrderID == Number(result.orderID) ;   
        });
       
    })
   
  }
    backbtn(){
         this.router.navigate(['/orders'])  
        }
}
