import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private createStudentAPI = "http://localhost:3000/students"
  private getStudentsAPI = "http://localhost:3000/students"
  constructor(private http: HttpClient) { }
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.getStudentsAPI)
  }
  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(`http://localhost:3000/students/${id}`).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
  createStudent(student: Student) {
    student.id = parseInt(`${Math.random() * 1000000}`).toString()
    return this.http.post<Student>(this.createStudentAPI, student, {}).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
  editStudent(student: Student) {
    return this.http.put<Student>(`http://localhost:3000/students/${student.id}`, student, {}).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
  deleteStudent(studentId: string) {
    return this.http.delete<void>(`http://localhost:3000/students/${studentId}`).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
}
