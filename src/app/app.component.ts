import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'angular';
 name: string = 'angular';
 position : string = 'target';
 work: string = 'software Developer';

 constructor(){

 }

}
