import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _courseSubject = new BehaviorSubject(null);
  apiURI="http://afternoon-falls-30227.herokuapp.com/api/v1/courses"
  // private __courses = [
  //   {
  //     id: 1,
  //     title: 'NodeJs',
  //     instructor: 'Ali',
  //     isAvailabel: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'JavaScript',
  //     instructor: 'Mahmoud',
  //     isAvailabel: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'HTML',
  //     instructor: 'Ali',
  //     isAvailabel: true,
  //   },
  //   {
  //     id: 4,
  //     title: 'Angular',
  //     instructor: 'Eman',
  //     isAvailabel: false,
  //   },
  // ];
  
  constructor(private __http: HttpClient) { }
 getCourses(){
  //  return this.__courses;
  return this.__http.get(this.apiURI)
 }
 change(data){
  this._courseSubject.next(data);
 }
 get courseSubjectObservable() {
  return this._courseSubject.asObservable();
}
  getCoursesById(id){
    // return this.__courses.find((course)=>course.id==id)
      return this.__http.get(`${this.apiURI}/${id}`)
  }
  addCourse(course){
    // this.__courses.push(course);
    return this.__http.post(this.apiURI , course);
  }
}
