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
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    ExamTableComponent,
    NewExamComponent,
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
    MatDatepickerModule
  ],
  exports: [
    ExamTableComponent,
  ],
  providers: [
    ExamService,
    ExamDataSource
  ]
})
export class ExamModule { }
