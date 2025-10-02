import { style } from "@angular/animations";
import { Component } from "@angular/core";
@Component(
    {
        selector    : 'Comp-A',
        templateUrl : './compA.component.html',
        styleUrls   : ['./compA.component.css']
    }
)
export class CompAComponent{
    

  // Variables for interpolation & property binding
  title = 'Angular Data Binding Example';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled = false;
 

  // Variable for two-way binding
  username = 'Haji';
  // spl-btn="greeen";
  // Method for event binding
  onButtonClick() {
    // spl-btn ="red";
    alert(`Hello ${this.username}, you clicked the button!`);
  }

  // Method to toggle image
  toggleImage() {
    this.imageUrl = this.imageUrl.includes('angular.png')
      ? 'https://angular.io/assets/images/logos/angular/angular_solidBlack.png'
      : 'https://angular.io/assets/images/logos/angular/angular.png';
  }
 
}
