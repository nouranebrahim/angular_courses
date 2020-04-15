import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistsComponent } from './courselists.component';

describe('CourselistsComponent', () => {
  let component: CourselistsComponent;
  let fixture: ComponentFixture<CourselistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
