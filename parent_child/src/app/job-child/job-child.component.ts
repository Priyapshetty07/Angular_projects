import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-job-child',
  templateUrl: './job-child.component.html',
  styleUrls: ['./job-child.component.css']
})
export class JobChildComponent implements OnInit {

   @Output() sendMessage = new EventEmitter(); //object 
  

  constructor() { }

  ngOnInit(): void {
    this.sendMessage.emit({company:'THIS or THBS',domain:'mern and mean'});


  }

}
