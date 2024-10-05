import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { StudentDataSource } from '../../services/student.dataSource';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent {
  myForm: FormGroup;
  id: string | null = null
  dataSource!: StudentDataSource;
  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router, private route: ActivatedRoute) {
    this.myForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      grade: ["", [Validators.required, Validators.min(1), Validators.max(11)]]
    })
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.dataSource = new StudentDataSource(this.studentService);
      this.dataSource.loadStudent(this.id)
      // console.log(this.dataSource)
      this.dataSource.student$.subscribe((student)=>{
        if(student){

          this.myForm.patchValue({
            firstName: student.firstName,
            lastName: student.lastName,
            grade: student.grade
          });
          console.log("student", student)
        }
      })
    }
  }
  submitHandler(): void {
    if (this.myForm.valid) {
      const values = { ...this.myForm.value }
      values.grade = parseInt(values.grade)
      values.id=this.id
      this.studentService.editStudent(values).subscribe({
        next: (response) => {
          console.log('Student created successfully', response)
          this.router.navigate(["students"])
        },
        error: (error) => {
          console.error('There was an error!', error)
        }
      })
    }
  }
}
