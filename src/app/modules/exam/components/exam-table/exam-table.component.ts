import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Exam, ExamFields } from '../../models/exam.model';
import { ExamDataSource } from '../../services/exam.dataSource';
import { ExamService } from '../../services/exam.service';
import { StudentDataSource } from '../../../student/services/student.dataSource';
import { LessonDataSource } from '../../../lesson/services/lesson.dataSource';
import { StudentService } from '../../../student/services/student.service';
import { LessonService } from '../../../lesson/services/lesson.service';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { LessonFields } from '../../../lesson/models/lesson.model';
import { StudentFields } from '../../../student/models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { ChangeGradeModalComponent } from '../change-grade-modal/change-grade-modal.component';

@Component({
  selector: 'app-exam-table',
  templateUrl: './exam-table.component.html',
  styleUrl: './exam-table.component.scss',
  providers: [LessonDataSource, StudentDataSource, ExamDataSource]
})

export class ExamTableComponent {

  displayedColumns: string[] = ["id", "lessonName", "studentName", "score",  "delete"];
  dataSource!: ExamDataSource;
  studentDataSource!: StudentDataSource
  lessonDataSource!: LessonDataSource
  readonly dialog = inject(MatDialog)
  constructor(private examService: ExamService, private studentService: StudentService, private lessonService: LessonService, private router: Router) {

  }
  openDialog(exam: Exam): void {
    const dialogRef = this.dialog.open(ChangeGradeModalComponent, {
      data: {
        score:exam.score
      },
    })
    dialogRef.afterClosed().subscribe(newScore => {
      if (newScore !== undefined) {
        exam.score = parseFloat(newScore)
        delete exam.lessonName
        delete exam.studentName
        this.examService.editExam(exam).subscribe({
          next: (data) => {
            console.log("data", data)
            this.fetchItems()
          },
          error: (error) => {
            console.log("error", error)
          }
        })
        // this.animal.set(result);
      }
    });
    // dialogRef.
  }
  fetchItems() {
    forkJoin({
      exams: this.examService.getExams(),
      lessons: this.lessonService.getLessons(),
      students: this.studentService.getStudents(),
    }).subscribe(({ exams, lessons, students }) => {
      const lessonsMap = new Map(lessons.map(lesson => [lesson.id, lesson]));
      const studentsMap = new Map(students.map(student => [student.id, student]));
      exams.forEach(exam => {
        exam.lessonName = lessonsMap.get(exam.lessonId)?.[LessonFields.Enum.name] || 'Unknown lesson';
        const student = studentsMap.get(exam.studentId)
        exam.studentName = `${student?.[StudentFields.Enum.firstName]} ${student?.[StudentFields.Enum.lastName]}` || 'Unknown student';
      });
      this.dataSource.exams$.next(exams)
    });
  }
  ngOnInit(): void {
    this.dataSource = new ExamDataSource(this.examService);
    this.studentDataSource = new StudentDataSource(this.studentService);
    this.lessonDataSource = new LessonDataSource(this.lessonService);
    this.fetchItems()
  }
  editExam(examId: number) {
    this.router.navigate(["exams", examId])
  }
  getLessonName(lessonId: string): string {
    return 'Unknown Lesson';
  }
  deleteExam(examId: string) {
    this.examService.deleteExam(examId).subscribe({
      next: (data) => {
        console.log("data", data)
        this.dataSource.loadExams()
      },
      error: (error) => {
        console.log("error", error)
      }
    })
    console.log("user wants to delete exam ", examId)
  }
  addNewExamHandler() {
    this.router.navigate(["exams", "new"])
  }
}
