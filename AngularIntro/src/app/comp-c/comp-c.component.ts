import { Component, ContentChild, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent {



  @ViewChild('paragraph') pg1: ElementRef;
  btnclickme(){
    console.log(this.pg1.nativeElement.innerText);
  }
    // ViewChild   --   what is the type here (ElementRef)
  @ViewChild('paragraph') p1 : ElementRef;
  @ViewChild('spanName')  s1 : ElementRef;
  @ViewChild('firstName')  firstName : ElementRef;

  @ContentChild('jobTitle')  lastname: ElementRef;


  btnClick(){




 
    console.log(this.p1.nativeElement.innerText);    
    console.log(this.s1.nativeElement.innerText);  
   
  

    console.log(this.firstName.nativeElement.value);
    console.log(this.lastname.nativeElement.value);

  }


  @ViewChild('testTemplate')  template1    : TemplateRef<any>;
  
  @ViewChild('containerRef' , { read:ViewContainerRef })  containerRef : ViewContainerRef;
  @ViewChild('containerRef')                                 v1 : ViewContainerRef;  // v1 is the element
  
  
  btnClickme(){
     
     this.containerRef.insert(this.template1.createEmbeddedView({"Firstname":"John" , "lastname" : "smith" , "Hometown" : "UK"}));
    
  }


}
