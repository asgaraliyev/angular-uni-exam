import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExamTableComponent } from '../exam-table/exam-table.component';

@Component({
  selector: 'app-change-grade-modal',
  templateUrl: './change-grade-modal.component.html',
  styleUrl: './change-grade-modal.component.scss'
})
export class ChangeGradeModalComponent {
  readonly dialogRef = inject(MatDialogRef<ExamTableComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  readonly score = model(this.data.score);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
