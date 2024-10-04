import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentFields } from '../../models/student.model';
import { StudentDataSource } from '../../services/student.dataSource';
import { StudentService } from '../../services/student.service';
import { MatIconModule } from '@angular/material/icon';
// import { StudentService } from '../../services/student.service';
// import { StudentDataSource } from '../../services/student.dataSource';

@Component({
  // standalone:true,
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss',
  providers: [],
})

export class StudentTableComponent {

  displayedColumns: string[] = [StudentFields.Enum.id, StudentFields.Enum.firstName, StudentFields.Enum.lastName, StudentFields.Enum.grade, "edit", "delete"];
  dataSource!: StudentDataSource;
  constructor(private studentService: StudentService, private router: Router) {

  }

  ngOnInit(): void {
    this.dataSource = new StudentDataSource(this.studentService);
    this.dataSource.loadStudents()
  }
  editStudent(studentId: number) {
    this.router.navigate(["students", studentId])
  }
  deleteStudent(studentId: string) {
    this.studentService.deleteStudent(studentId).subscribe({
      next: (data) => {
        console.log("data", data)
        this.dataSource.loadStudents()
      },
      error: (error) => {
        console.log("error", error)
      }
    })
    console.log("user wants to delete student ", studentId)
  }
  addNewStudentHandler() {
    this.router.navigate(["students","new"])
  }
}
