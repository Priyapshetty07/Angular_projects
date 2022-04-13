import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  constructor(private myHttp: HttpClient) { }

  getCourseList() {
    return this.myHttp.get('assets/mock-data/course-list.json');

  }

  getCourseList1() {
    return this.myHttp.get('assets/mock-data/cloud.json');

  }

  getCourseList2() {
    return this.myHttp.get('assets/mock-data/appdov.json');

  }

  getCourseList3() {
    return this.myHttp.get('assets/mock-data/machine.json');

  }

  getCourseList4() {
    return this.myHttp.get('assets/mock-data/testing.json');

  }

  getCourseList5() {
    return this.myHttp.get('assets/mock-data/big.json');

  }

  getCourseList6() {
    return this.myHttp.get('assets/mock-data/test.json');

  }
}