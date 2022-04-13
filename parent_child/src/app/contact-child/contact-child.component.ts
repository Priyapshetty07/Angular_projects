import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-child',
  templateUrl: './contact-child.component.html',
  styleUrls: ['./contact-child.component.css']
})
export class ContactChildComponent implements OnInit {

  @Output() sendMessage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.sendMessage.emit({courseName:'Mern And Mean', 
                           started_date:'12/12/2021'});
  }

}
