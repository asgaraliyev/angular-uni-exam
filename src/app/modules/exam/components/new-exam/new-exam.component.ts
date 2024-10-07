import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from '../../services/exam.service';
import { LessonDataSource } from '../../../lesson/services/lesson.dataSource';
import { StudentDataSource } from '../../../student/services/student.dataSource';
import moment from 'moment';


function atLeastOneStudentId(control: AbstractControl) {
  const studentIds = control.value;
  if (Array.isArray(studentIds) && studentIds.length > 0) {
    return null; // Valid
  }
  return { atLeastOneRequired: true }; // Invalid
}

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrl: './new-exam.component.scss',
  providers: [LessonDataSource, StudentDataSource]
})
export class NewExamComponent {
  myForm: FormGroup;

  tomorrow = moment().add(1, "day").toDate();
  constructor(private fb: FormBuilder, private examService: ExamService, private router: Router, public lessonDataSource: LessonDataSource, public studentDataSource: StudentDataSource) {
    this.myForm = this.fb.group({
      lessonId: ["", Validators.required],
      studentIds: [[], [Validators.required, atLeastOneStudentId]],
      date: [this.tomorrow, [Validators.required]],
    })
  }
  ngOnInit(): void {
    console.log("salam")
    this.lessonDataSource.loadLessons();
    this.studentDataSource.loadStudents();

  }

  submitHandler(): void {
    if (this.myForm.valid) {
      const values = { ...this.myForm.value }

      for (let index = 0; index < values.studentIds.length; index++) {
        const studentId = values.studentIds[index];
        this.examService.createNewExam({
          id: values.id,
          studentId,
          date: values.date,
          lessonId: values.lessonId,
          score: null
        }).subscribe({
          next: (response) => {
            console.log('Student created successfully', response)
            this.router.navigate(["exams"])
          },
          error: (error) => {
            console.error('There was an error!', error)
          }
        })


      }

    }
  }
}
