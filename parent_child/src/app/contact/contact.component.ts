import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  array = ['one','two','three'];
  deatails =[{names:'priya',
            age:24}];

  constructor() { }

  ngOnInit(): void {
  }

}
