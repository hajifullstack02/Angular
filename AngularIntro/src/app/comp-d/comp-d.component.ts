import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp-d',
  templateUrl: './comp-d.component.html',
  styleUrls: ['./comp-d.component.css']
})
export class CompDComponent {
  @Input("inputStudentName")     inputStudentName:any;
  @Input("inputStudentLocation") inputStudentLocation:any;
  @Input("inputStudentAge")      inputStudentAge:any;
  @Input("inputStudentDetails")  inputStudentDetails:any;
  @Input("inputStudentHobbies")  inputStudentHobbies:any;




  ShowStudent(){
      console.log(this.inputStudentName);
      console.log(this.inputStudentLocation);
      console.log(this.inputStudentAge);
      console.log(this.inputStudentDetails);
      console.log(this.inputStudentHobbies);


    // 2. passing data
     this.SendStudent.emit("I am fine .. What about you?");
    
  }


  evtSudentBooks(){
      this.SendStudentSubjects.emit(["js" , "ts" , "html" , "angular"]);   
  }

  // 1 step - declaration
                                            //class  --> carry your message from one comp to other comp
  @Output("SendStudent")  SendStudent = new EventEmitter<string>();
                                           //class  --> carry your message from one comp to other comp
  @Output("SendStudentSubjects")  SendStudentSubjects = new EventEmitter<string[]>();

}
