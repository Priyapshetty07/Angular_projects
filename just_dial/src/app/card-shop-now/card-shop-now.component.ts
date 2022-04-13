import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-shop-now',
  templateUrl: './card-shop-now.component.html',
  styleUrls: ['./card-shop-now.component.css']
})
export class CardShopNowComponent implements OnInit {

  itemList = [
    {
      title:'Mobile Phone',
      buttons: 'Shop Now',
      imageLink: "./../../assets/image/a1.JPG"
    },
    {
      title:'Television Sets',
      buttons: 'Shop Now',
      imageLink: "./../../assets/image/a2.JPG"
    },
    {
      title:'Digital Camer',
      buttons: 'Shop Now',
      imageLink: "./../../assets/image/a3.JPG"
    }

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
