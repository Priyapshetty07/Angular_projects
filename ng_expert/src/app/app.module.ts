import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ChildItemComponent } from './child-item/child-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainAreaComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    IfComponent,
    SwitchComponent,
    ParentListComponent,
    ChildItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
