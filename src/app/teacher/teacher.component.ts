import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';

console.log("Testing to load");

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

}
