import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courseitems',
  templateUrl: './courseitems.component.html',
  styleUrls: ['./courseitems.component.scss']
})
export class CourseitemsComponent implements OnInit {
  // @Input() title: string;
  // @Input() instucrtor:string;
  // @Input() isAvailable:boolean;
  @Input('courseData') course;
  @Output() courseClick = new EventEmitter<string>();

  constructor(private __coursesServices: CoursesService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.courseClick.emit(this.course.title);
    console.log('llaaaaaaaaaa');
  }
}
