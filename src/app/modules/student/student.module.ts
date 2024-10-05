import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentDataSource } from './services/student.dataSource';
import { StudentService } from './services/student.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { NewStudentComponent } from './components/new-student/new-student.component';



@NgModule({
  declarations: [
    StudentTableComponent,
    EditStudentComponent,
    NewStudentComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    StudentTableComponent,
  ],
  providers: [
    StudentService,
    StudentDataSource
  ]
})
export class StudentModule { }
