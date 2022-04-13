import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() label : any;
  @Input() profile : any;

  constructor() { }

  ngOnInit(): void {
    alert(this.label);
    alert(this.profile);
  }

}
