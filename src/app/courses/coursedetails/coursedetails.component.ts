import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss']
})
export class CoursedetailsComponent implements OnInit {
  course;
  // courseId=1;
  // title="nodejs";
  // instructor="ali";
  // isAvailable=true;
  constructor(private __coursesServices: CoursesService,
    private __ActivatedRoute :ActivatedRoute) { 
    this.__coursesServices.courseSubjectObservable.subscribe((data)=>{
       this.course=data;
    })
  }

  ngOnInit(): void {
    this.__ActivatedRoute.paramMap.subscribe((paramMap)=>{
        if(paramMap.has('id')){
            this.__coursesServices.
            getCoursesById(paramMap.get('id')).
            subscribe((res:any)=>{
              if(res.status){
                this.course=res.data
              }
            })
        }
    })

  }

}
