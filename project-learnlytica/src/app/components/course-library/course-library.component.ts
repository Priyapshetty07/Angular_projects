import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-course-library',
  templateUrl: './course-library.component.html',
  styleUrls: ['./course-library.component.css']
})
export class CourseLibraryComponent implements OnInit {

  cList: any;
  clouds: any;
  appdovs: any;
  mach: any;
  test:any;
  bigs:any;
  tests:any;

  constructor(private call: ConfigService) { }
  ngOnInit(): void {
    this.call.getCourseList().subscribe((value) => {
      this.cList = value

    });

    this.call.getCourseList1().subscribe((value1) => {
      this.clouds = value1

    });

    this.call.getCourseList2().subscribe((value2) => {
      this.appdovs = value2

    });

    this.call.getCourseList3().subscribe((value3) => {
      this.mach = value3

    });

    this.call.getCourseList4().subscribe((value4) => {
      this.test= value4

    });

    
    this.call.getCourseList5().subscribe((value5) => {
      this.bigs= value5

    });

    this.call.getCourseList6().subscribe((value6) => {
      this.tests= value6

    });

  }
}
