import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  course=new course();
  constructor(private __CoursesService:CoursesService,
    private __router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    const course={...this.course};
    this.__CoursesService.addCourse(course).subscribe((res:any)=>{
      if(res.status){
         this.__router.navigate(['/courses',res.data.id])
      }
      console.log(res)
    })
    form.reset();
  }

}
