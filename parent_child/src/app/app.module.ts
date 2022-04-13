import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ChildListComponent } from './child-list/child-list.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactListParentComponent } from './contact-list-parent/contact-list-parent.component';
import { ContactChildComponent } from './contact-child/contact-child.component';
import { DomainParentComponent } from './domain-parent/domain-parent.component';
import { DomainChildComponent } from './domain-child/domain-child.component';
import { JobListParentComponent } from './job-list-parent/job-list-parent.component';
import { JobChildComponent } from './job-child/job-child.component';
import { JobListPComponent } from './job-list-p/job-list-p.component';
import { JobCComponent } from './job-c/job-c.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentListComponent,
    ChildListComponent,
    LoginComponent,
    ContactComponent,
    ContactListComponent,
    ContactListParentComponent,
    ContactChildComponent,
    DomainParentComponent,
    DomainChildComponent,
    JobListParentComponent,
    JobChildComponent,
    JobListPComponent,
    JobCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
