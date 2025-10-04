import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {
     mode="white"
     fontColor='black'

    
      // ismode= true;
      onButtonClick(){
     this.mode=this.mode.includes('white')?'black':'white';
     this.fontColor=this.fontColor.includes('black') ? 'white':'black'
      }
     
      colorType = "brown";

      _ename="haji";

      isLogging='user';

      employees=['haji','raj','naresh','naveen']

      day=5;
}
