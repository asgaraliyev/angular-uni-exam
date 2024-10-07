import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeGradeModalComponent } from './change-grade-modal.component';

describe('ChangeGradeModalComponent', () => {
  let component: ChangeGradeModalComponent;
  let fixture: ComponentFixture<ChangeGradeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeGradeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeGradeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
