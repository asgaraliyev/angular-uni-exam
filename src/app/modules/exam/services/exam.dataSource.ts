import { DataSource } from "@angular/cdk/collections";
import { Exam } from "../models/exam.model";
import { BehaviorSubject, Observable } from "rxjs";
import { ExamService } from "./exam.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ExamDataSource extends DataSource<Exam>{
    exams$ = new BehaviorSubject<Exam[]>([])
    isLoading$ = new BehaviorSubject<boolean>(true)
    exam$ = new BehaviorSubject<Exam | null>(null)
    constructor(private examService: ExamService) {
        super()
    }
    connect(): Observable<Exam[]> {
        return this.exams$.asObservable()
    }
    disconnect(): void {
        this.exams$.complete()
    }
    loadExam(id: string) {
        this.isLoading$.next(true)

        this.examService.getExam(id).subscribe((exam) => {
            this.exam$.next(exam)
            this.isLoading$.next(false)
        })
    }
    loadExams(): void {
        this.isLoading$.next(true)
        this.examService.getExams().subscribe((exams) => {
            this.exams$.next(exams)
            this.isLoading$.next(false)
        })
    }
}