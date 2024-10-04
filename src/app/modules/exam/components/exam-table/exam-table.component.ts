import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamFields } from '../../models/exam.model';
import {  ExamDataSource } from '../../services/exam.dataSource';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-exam-table',
  templateUrl: './exam-table.component.html',
  styleUrl: './exam-table.component.scss',
  providers: [],
})

export class ExamTableComponent {

  displayedColumns: string[] = [ExamFields.Enum.id, ExamFields.Enum.lessonId, ExamFields.Enum.studentId, ExamFields.Enum.grade, "edit", "delete"];
  dataSource!: ExamDataSource;
  constructor(private examService: ExamService, private router: Router) {

  }

  ngOnInit(): void {
    this.dataSource = new ExamDataSource(this.examService);
    this.dataSource.loadExams()
  }
  editExam(examId: number) {
    this.router.navigate(["exams", examId])
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
    this.router.navigate(["exams","new"])
  }
}
