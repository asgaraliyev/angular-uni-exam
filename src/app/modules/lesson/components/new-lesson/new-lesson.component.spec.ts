import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLessonComponent } from './new-lesson.component';

describe('NewLessonComponent', () => {
  let component: NewLessonComponent;
  let fixture: ComponentFixture<NewLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
