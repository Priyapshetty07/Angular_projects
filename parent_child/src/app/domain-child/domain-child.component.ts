import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain-child',
  templateUrl: './domain-child.component.html',
  styleUrls: ['./domain-child.component.css']
})
export class DomainChildComponent implements OnInit {

  @Input() company:any;
  @Input() compLocation:any;
  @Input() phone:any;

  constructor() { }

  ngOnInit(): void {
    alert(this.company);
    alert(this.compLocation);
    alert(this.phone);
  }

}
