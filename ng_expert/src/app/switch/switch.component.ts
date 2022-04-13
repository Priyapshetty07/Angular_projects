import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  person = [
    {
      "name": "diya",
      "age": 14,
      "city": 'shimoga'
    },
    {
      "name": "aarvi",
      "age": 2,
      "city": 'kalasa'
    },
    {
      "name": "Ira",
      "age": 1,
      "city": 'udupi'
    },
    {
      "name": "evaa",
      "age": 3,
      "city": 'banglore'
    },

  ];

  getColors(code: string) {
    switch (code) {
      case 'SHM':
        return 'orange';
        break;

      case 'KAL':
        return 'blue';
        break;
      default:
        return 'green';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
