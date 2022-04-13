import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

  @Input() name : any;
  @Input() age : any;
  @Input() location : any;

  constructor() { }

  ngOnInit(): void {
    alert(this.name);
    alert(this.age);
    alert(this.location);
  }

}
