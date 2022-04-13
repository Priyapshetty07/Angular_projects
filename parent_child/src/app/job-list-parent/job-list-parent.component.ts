import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list-parent',
  templateUrl: './job-list-parent.component.html',
  styleUrls: ['./job-list-parent.component.css']
})
export class JobListParentComponent implements OnInit {

  recived: any;

  constructor() { }

  ngOnInit(): void {
  }

  recivedFromChild(val:String)
  {
    this.recived = val; 
  }
}
