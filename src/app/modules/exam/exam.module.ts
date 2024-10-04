import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExamTableComponent } from './components/exam-table/exam-table.component';
import { ExamDataSource, } from './services/exam.dataSource';
import { ExamService, } from './services/exam.service';



@NgModule({
  declarations: [
    ExamTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
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
