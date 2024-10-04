import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonSelectorComponent } from './lesson-selector.component';

describe('LessonSelectorComponent', () => {
  let component: LessonSelectorComponent;
  let fixture: ComponentFixture<LessonSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
