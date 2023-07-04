import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  // inputs:['pdata']
  outputs:['childevent']
})
export class StudentComponent {
  // pdata:any
 childevent = new EventEmitter();


  onchange(val:any){
  // console.log(val);
  this.childevent.emit(val)

  }
}
