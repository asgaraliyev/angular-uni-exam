import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Exam } from '../models/exam.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private createExamAPI = "http://localhost:3000/exams"
  private getExamsAPI = "http://localhost:3000/exams"
  constructor(private http: HttpClient) { }
  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.getExamsAPI)
  }
  getExam(id: string): Observable<Exam> {
    return this.http.get<Exam>(`http://localhost:3000/exams/${id}`).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
  createExam(exam: Exam) {
    exam.id = parseInt(`${Math.random() * 1000000}`).toString()
    return this.http.post<Exam>(this.createExamAPI, exam, {}).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
  editExam(exam: Exam) {
    return this.http.put<Exam>(`http://localhost:3000/exams/${exam.id}`, exam, {}).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
  deleteExam(examId: string) {
    return this.http.delete<void>(`http://localhost:3000/exams/${examId}`).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
}
