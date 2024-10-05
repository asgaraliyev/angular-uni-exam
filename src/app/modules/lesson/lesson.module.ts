import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LessonDataSource } from './services/lesson.dataSource';
import { LessonService } from './services/lesson.service';
import { LessonTableComponent } from './components/lesson-table/lesson-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewLessonComponent } from './components/new-lesson/new-lesson.component';
import { EditLessonComponent } from './components/edit-lesson/edit-lesson.component';



@NgModule({
  declarations: [
    LessonTableComponent,
    NewLessonComponent,
    EditLessonComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule

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
