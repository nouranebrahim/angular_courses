import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseitemsComponent } from './courseitems.component';

describe('CourseitemsComponent', () => {
  let component: CourseitemsComponent;
  let fixture: ComponentFixture<CourseitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
