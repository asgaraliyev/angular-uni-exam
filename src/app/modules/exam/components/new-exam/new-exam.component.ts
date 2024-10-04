import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from '../../services/exam.service';
@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrl: './new-exam.component.scss'
})
export class NewExamComponent {
  myForm:FormGroup;
  constructor(private fb:FormBuilder,private examService:ExamService,private router:Router){
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
      this.examService.createExam(values).subscribe({
        next:(response)=>{
          console.log('Exam created successfully', response)
          this.router.navigate(["exams"])
        },
        error:(error)=>{
          console.error('There was an error!', error)
        }
      })
    }
  }
}
