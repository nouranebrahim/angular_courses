import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'NodeJs',
      instructor: 'Ali',
      isAvailabel: true,
    },
    {
      id: 2,
      title: 'JavaScript',
      instructor: 'Mahmoud',
      isAvailabel: false,
    },
    {
      id: 3,
      title: 'HTML',
      instructor: 'Ali',
      isAvailabel: true,
    },
    {
      id: 4,
      title: 'Angular',
      instructor: 'Eman',
      isAvailabel: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}