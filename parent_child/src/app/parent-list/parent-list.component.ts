import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {

  userName = 'Priya P Shetty'
  userAge = '24'
  userLocation ='Shimoga'

  constructor() { }

  ngOnInit(): void {
   

  }

}
