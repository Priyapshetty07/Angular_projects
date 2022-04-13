import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseLibraryComponent } from './components/course-library/course-library.component';


const routes: Routes = [
   {path:'courselibrary',component:CourseLibraryComponent} //parent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
