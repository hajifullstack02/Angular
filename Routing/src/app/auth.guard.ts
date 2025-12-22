import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 const router = inject(Router);   // which is help to create the instance of Router
  
  let userName = localStorage.getItem("username");

  if(userName === "admin"){
    return true;    // allow the access
  }
  else
  {
    router.navigate(["/login"]);
    // Please navigate to the Login page...
    return false;
  }
};
