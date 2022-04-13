import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-job-c',
  templateUrl: './job-c.component.html',
  styleUrls: ['./job-c.component.css']
})
export class JobCComponent implements OnInit {

  @Input()companyName1: any;
  @Input() domain1: any;
  @Input() empId1: any;

  @Output() sending = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    alert(this.companyName1);
    alert(this.domain1);
    alert(this.empId1);

    this.sending.emit({empName:'priya p shetty',empNum:9000000001});
  }

}
