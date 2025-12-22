import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Routing';
   title='WebApp';
   
  constructor(private userServce : UserService){
  }

  ngOnInit() {
      this.userServce.usernameEmitter.subscribe((uname:string) =>{
          this.userName = uname;
      });
  }

  locastorageItem : string | null = localStorage.getItem('username');
  userName        : string        = this.locastorageItem ? this.locastorageItem : 'Guest';




}
