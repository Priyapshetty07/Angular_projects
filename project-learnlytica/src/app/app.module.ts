import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

import { ServicessComponent } from './components/servicess/servicess.component';
import { LoginComponent } from './components/login/login.component';
import { CourseLibraryComponent } from './components/course-library/course-library.component';
import { CourseListComponent } from './components/course-list/course-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    HeaderComponent,
    FooterComponent,
   
    ServicessComponent,
    LoginComponent,
    CourseLibraryComponent,
    CourseListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
