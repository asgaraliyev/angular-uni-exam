import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrl: './new-lesson.component.scss'
})
export class NewLessonComponent {
  myForm:FormGroup;
  constructor(private fb:FormBuilder,private lessonService:LessonService,private router:Router){
    this.myForm =this.fb.group({
      name: ["", Validators.required],
      grade: ["", [Validators.required, Validators.min(1), Validators.max(11)]],
      teacherFirstName: ["", Validators.required],
      teacherLastName:["",Validators.required],
    })
  }

  submitHandler():void{
    if (this.myForm.valid){
      const values = { ...this.myForm.value }
      values.grade = parseInt(values.grade)
      this.lessonService.createLesson(values).subscribe({
        next:(response)=>{
          console.log('Lesson created successfully', response)
          this.router.navigate(["/lessons"])
        },
        error:(error)=>{
          console.error('There was an error!', error)
        }
      })
    }
  }
}
