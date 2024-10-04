import { DataSource } from "@angular/cdk/collections";
import { Student } from "../models/student.model";
import { BehaviorSubject, Observable } from "rxjs";
import { StudentService } from "./student.service";
import { Injectable } from "@angular/core";

@Injectable()
export class StudentDataSource extends DataSource<Student>{
    students$ = new BehaviorSubject<Student[]>([])
    isLoading$ = new BehaviorSubject<boolean>(true)
    student$ = new BehaviorSubject<Student | null>(null)
    constructor(private studentService: StudentService) {
        super()
    }
    connect(): Observable<Student[]> {
        return this.students$.asObservable()
    }
    disconnect(): void {
        this.students$.complete()
    }
    loadStudent(id: string) {
        this.isLoading$.next(true)

        this.studentService.getStudent(id).subscribe((student) => {
            this.student$.next(student)
            this.isLoading$.next(false)
        })
    }
    loadStudents(): void {
        this.isLoading$.next(true)
        this.studentService.getStudents().subscribe((students) => {
            this.students$.next(students)
            this.isLoading$.next(false)
        })
    }
}