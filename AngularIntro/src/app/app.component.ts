import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  StudentName = "raj";
   StudentLocation = "hyd";
   StudentAge  = 24;
   StudentDetails = {
      Mothernme  : "sam",
      Fathername : "sita"
   }
   Hobbies = ["crikcket", "chess"];


   showStudentMessage(event:any , age:number , bookname:string){
      console.log(event);
      console.log(age);
      console.log(bookname);
   }

   showStudnetBooks(eventdeta:any){
       console.log(eventdeta);
   }

}
