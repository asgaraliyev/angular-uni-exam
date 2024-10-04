import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
@Component({
  selector: 'app-new-student',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule,MatInputModule,CommonModule,MatButtonModule],
  templateUrl: './new-student.component.html',
  styleUrl: './new-student.component.scss'
})
export class NewStudentComponent {
  myForm:FormGroup;
  constructor(private fb:FormBuilder,private studentService:StudentService,private router:Router){
    this.myForm =this.fb.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      grade: ["", [Validators.required, Validators.min(1), Validators.max(11)]]
    })
  }

  submitHandler():void{
    if (this.myForm.valid){
      const values = { ...this.myForm.value }
      values.grade = parseInt(values.grade)
      this.studentService.createStudent(values).subscribe({
        next:(response)=>{
          console.log('Student created successfully', response)
          this.router.navigate(["students"])
        },
        error:(error)=>{
          console.error('There was an error!', error)
        }
      })
    }
  }
}
