import { Component ,
  OnChanges,
  OnInit,
  AfterContentInit,
  Input,
  ContentChild,
  AfterViewInit,
  DoCheck,
  OnDestroy,
  AfterContentChecked,
  AfterViewChecked,
  ElementRef,
  ViewChild,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnChanges,OnInit,AfterContentInit,
AfterViewInit,DoCheck,AfterContentChecked,AfterViewChecked,OnDestroy {

  @Input('amount') amount:any;
  @Input('location') location:any

  designation="";
  constructor(){

  }
  ngOnChanges(): void {
    
  }
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
  @ContentChild('fitstname') fName !:ElementRef;
  hajiDetails:any;
ngAfterViewInit(){

}
  ngAfterContentInit(): void {
    
  }

  studentname="raj";
  userLocation ="'Hyd'";
  @ViewChild('midname') midname !: ElementRef;


//compnont whatever activity is going on this life cycle will trigger.
  ngDoCheck(): void {
       console.log("Docheck");
  }

  //whatever work is going on your content then this life cycle hook will trigger.
  ngAfterContentChecked(): void {
    
  }

  ngAfterViewChecked(): void {
    
  }
  
}