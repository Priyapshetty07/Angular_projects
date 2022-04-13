import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list-parent',
  templateUrl: './contact-list-parent.component.html',
  styleUrls: ['./contact-list-parent.component.css']
})
export class ContactListParentComponent implements OnInit {

  ChildData:any;

  constructor() { }

  ngOnInit(): void {
  }

  recivedFromChildData(myval:string)
  {
    this.ChildData=myval;
  }
}
