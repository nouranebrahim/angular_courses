import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourselistsComponent } from './courselists/courselists.component';
import { CourseitemsComponent } from './courseitems/courseitems.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import {FormsModule} from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component'
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [CoursesComponent, CourselistsComponent, 
    CourseitemsComponent, 
    CoursedetailsComponent, CourseFormComponent,

  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  exports:[CoursesComponent]
})
export class CoursesModule { }
