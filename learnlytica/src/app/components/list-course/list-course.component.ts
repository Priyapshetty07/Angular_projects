import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private congifs:ConfigService) { }

 myTitle:String="THBS"; //custom pipe

  values:String="100$"; //custom pipe

  cList:any;

  ngOnInit(): void {

    this.congifs.getCourseList().subscribe(
      (val1) => {
        // console.log(val1)
        this.cList=val1;
      }
    );
    
  }

}
