import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewStudentComponent } from './components/new-student/new-student.component';
// import { EditStudentComponent } from './components/edit-student/edit-student.component';
// import { StudentService } from './services/student.service';
// import { StudentDataSource } from './services/student.dataSource';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentDataSource } from './services/student.dataSource';
import { StudentService } from './services/student.service';



@NgModule({
  declarations: [
    StudentTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    // NewStudentComponent,
    // EditStudentComponent
  ],
  exports: [
    StudentTableComponent,
    // NewStudentComponent,
    // EditStudentComponentx
  ],
  providers: [
    StudentService,
    StudentDataSource
  ]
})
export class StudentModule { }
