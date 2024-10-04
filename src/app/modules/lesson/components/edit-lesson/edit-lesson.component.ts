import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LessonService } from '../../services/lesson.service';
import { LessonDataSource } from '../../services/lesson.dataSource';

@Component({
  selector: 'app-edit-lesson',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, CommonModule, MatButtonModule],
  templateUrl: './edit-lesson.component.html',
  styleUrl: './edit-lesson.component.scss'
})
export class EditLessonComponent {
  myForm: FormGroup;
  id: string | null = null
  dataSource!: LessonDataSource;
  constructor(private fb: FormBuilder, private lessonService: LessonService, private router: Router, private route: ActivatedRoute) {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      grade: ["", [Validators.required, Validators.min(1), Validators.max(11)]],
      teacherFirstName: ["", Validators.required],
      teacherLastName: ["", Validators.required],
    })
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.dataSource = new LessonDataSource(this.lessonService);
      this.dataSource.loadLesson(this.id)
      // console.log(this.dataSource)
      this.dataSource.lesson$.subscribe((lesson)=>{
        if(lesson){

          this.myForm.patchValue({
            name:lesson.name,
            teacherFirstName: lesson.teacherFirstName,
            teacherLastName: lesson.teacherLastName,
            grade: lesson.grade
          });
          console.log("lesson", lesson)
        }
      })
    }
  }
  submitHandler(): void {
    if (this.myForm.valid) {
      const values = { ...this.myForm.value }
      values.grade = parseInt(values.grade)
      values.id=this.id
      this.lessonService.editLesson(values).subscribe({
        next: (response) => {
          console.log('Lesson created successfully', response)
          this.router.navigate(["/lessons"])
        },
        error: (error) => {
          console.error('There was an error!', error)
        }
      })
    }
  }
}
