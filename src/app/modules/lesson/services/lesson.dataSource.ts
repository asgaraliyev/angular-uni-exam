import { DataSource } from "@angular/cdk/collections";
import { Lesson } from "../models/lesson.model";
import { BehaviorSubject, Observable } from "rxjs";
import { LessonService } from "./lesson.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LessonDataSource extends DataSource<Lesson>{
    lessons$ = new BehaviorSubject<Lesson[]>([])
    isLoading$ = new BehaviorSubject<boolean>(true)
    lesson$ = new BehaviorSubject<Lesson | null>(null)
    constructor(private lessonService: LessonService) {
        super()
    }
    connect(): Observable<Lesson[]> {
        return this.lessons$.asObservable()
    }
    disconnect(): void {
        this.lessons$.complete()
    }
    loadLesson(id: string) {
        this.isLoading$.next(true)

        this.lessonService.getLesson(id).subscribe((lesson) => {
            this.lesson$.next(lesson)
            this.isLoading$.next(false)
        })
    }
    loadLessons(): void {
        this.isLoading$.next(true)
        this.lessonService.getLessons().subscribe((lessons) => {
            this.lessons$.next(lessons)
            this.isLoading$.next(false)
        })
    }
}