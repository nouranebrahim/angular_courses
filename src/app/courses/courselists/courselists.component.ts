import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
@Component({
  selector: 'app-courselists',
  templateUrl: './courselists.component.html',
  styleUrls: ['./courselists.component.scss']
})
export class CourselistsComponent implements OnInit {
  courses;
  clickedCourse;
  
  

  
  onCourseClick(data){

    this.clickedCourse=data;
  }
  
  clickedCourseTitle;
  constructor(private _coursesService: CoursesService) {
    console.log(_coursesService);
  }

  ngOnInit(): void {
    this._coursesService.getCourses().subscribe((res:any)=>{
      if(res.status){
        this.courses=res.data;

      }
      console.log(res)
     
    });
  }
  onCourseItemClick(course){
    this._coursesService.change(course);
  }


}
