import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list-p',
  templateUrl: './job-list-p.component.html',
  styleUrls: ['./job-list-p.component.css']
})
export class JobListPComponent implements OnInit {

  compName="thbs_banglore";
  userDomain="web";
  id=3346;

  revData:any;

  constructor() { }

  ngOnInit(): void {
  }
  recivedchild(myval1:String)
  {
    this.revData=myval1;
  }

}
