import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  
   username = "";

  constructor(private router:Router , private userService : UserService){}
  
  evtLogin(){


    localStorage.setItem("username",this.username);  

    this.userService.usernameEmitter.emit(this.username);

    this.router.navigate(["/orders"]);

  }
}
