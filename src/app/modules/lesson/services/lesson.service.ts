import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Lesson } from '../models/lesson.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private createLessonAPI = "http://localhost:3000/lessons"
  private getLessonsAPI = "http://localhost:3000/lessons"
  constructor(private http: HttpClient) { }
  getLessons(searchParams?: URLSearchParams): Observable<Lesson[]> {
    if (!searchParams) searchParams=new URLSearchParams()
    return this.http.get<Lesson[]>(this.getLessonsAPI + "?" + searchParams.toString())
  }
  getLesson(id: string): Observable<Lesson> {
    return this.http.get<Lesson>(`http://localhost:3000/lessons/${id}`).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
  createLesson(lesson: Lesson) {
    lesson.id = parseInt(`${Math.random() * 1000000}`).toString()
    return this.http.post<Lesson>(this.createLessonAPI, lesson, {}).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
  editLesson(lesson: Lesson) {
    return this.http.put<Lesson>(`http://localhost:3000/lessons/${lesson.id}`, lesson, {}).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
  deleteLesson(lessonId: string) {
    return this.http.delete<void>(`http://localhost:3000/lessons/${lessonId}`).pipe(
      catchError(error => {
        console.log("error", error)
        return throwError(() => error)
      })
    )
  }
}
