import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LessonDataSource } from './services/lesson.dataSource';
import { LessonService } from './services/lesson.service';
import { LessonTableComponent } from './components/lesson-table/lesson-table.component';



@NgModule({
  declarations: [
    LessonTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    LessonTableComponent,
  ],
  providers: [
    LessonService,
    LessonDataSource
  ]
})
export class LessonModule { }
