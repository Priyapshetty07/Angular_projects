import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {

  myData = 'priya';
  ageData = 24;

  constructor() { }

  ngOnInit(): void {
  }

}
