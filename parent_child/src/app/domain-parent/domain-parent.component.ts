import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain-parent',
  templateUrl: './domain-parent.component.html',
  styleUrls: ['./domain-parent.component.css']
})
export class DomainParentComponent implements OnInit {

  companyName='THBS'
  locationName='Banglore'
  mobileNum=9876543210

  constructor() { }

  ngOnInit(): void {
    
  }

}
