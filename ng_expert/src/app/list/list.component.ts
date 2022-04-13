import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
//array of object
  itemList = [
    {
      title: 'BEACH',
      content: 'a pebbly or sandy shore, especially by the sea between high- and low-water marks.',
      btnText: 'Beach',
      link: 'www.beach.com',
      imageLink: "https://media.istockphoto.com/photos/tropical-white-sand-beach-with-coco-palms-picture-id1181563943?k=20&m=1181563943&s=612x612&w=0&h=r46MQMvFnvrzzTfjVmvZED5nZyTmAYwISDvkdtM2i2A="
    },
    {
      title: 'MOUNTAIN',
      content: 'A mountain is an elevated portion of the Earth scrust, generally with steep sides that show significant exposed bedrock.',
      btnText: 'Mountain',
      link: 'https://mountain.com',
      imageLink: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
    },
    {
      title: 'FALLS',
      content: 'A waterfall is a point in a river or stream where water flows over a vertical drop or a series of steep drops.',
      btnText: 'Falls',
      link: 'https://falls.com',
      imageLink: "https://www.planetware.com/wpimages/2020/03/world-most-beautiful-waterfalls-havasu-falls.jpg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
