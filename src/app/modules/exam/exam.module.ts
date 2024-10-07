import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExamTableComponent } from './components/exam-table/exam-table.component';
import { ExamDataSource, } from './services/exam.dataSource';
import { ExamService, } from './services/exam.service';
import { LessonModule } from '../lesson/lesson.module';
import { NewExamComponent } from './components/new-exam/new-exam.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LessonDataSource } from '../lesson/services/lesson.dataSource';
import { StudentDataSource } from '../student/services/student.dataSource';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { ChangeGradeModalComponent } from './components/change-grade-modal/change-grade-modal.component';



@NgModule({
  declarations: [
    ExamTableComponent,
    NewExamComponent,
    ChangeGradeModalComponent  
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    LessonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    

    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  exports: [
    ExamTableComponent,
  ],
  providers: [
    ExamService,
    ExamDataSource,
    LessonDataSource,
    StudentDataSource
  ]
})
export class ExamModule { }
