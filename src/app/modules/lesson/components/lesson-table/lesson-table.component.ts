import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LessonFields } from '../../models/lesson.model';
import { LessonDataSource } from '../../services/lesson.dataSource';
import { LessonService } from '../../services/lesson.service';
@Component({
  // standalone:true,
  selector: 'app-lesson-table',
  templateUrl: './lesson-table.component.html',
  styleUrl: './lesson-table.component.scss',
  providers: [],
})

export class LessonTableComponent {

  displayedColumns: string[] = [LessonFields.Enum.id, LessonFields.Enum.name, LessonFields.Enum.grade, LessonFields.Enum.teacherFirstName, LessonFields.Enum.teacherLastName, "edit", "delete"];
  dataSource!: LessonDataSource;
  constructor(private lessonService: LessonService, private router: Router) {

  }

  ngOnInit(): void {
    this.dataSource = new LessonDataSource(this.lessonService);
    this.dataSource.loadLessons()
  }
  editLesson(lessonId: number) {
    this.router.navigate(["lessons", lessonId])
  }
  deleteLesson(lessonId: string) {
    this.lessonService.deleteLesson(lessonId).subscribe({
      next: (data) => {
        console.log("data", data)
        this.dataSource.loadLessons()
      },
      error: (error) => {
        console.log("error", error)
      }
    })
    console.log("user wants to delete lesson ", lessonId)
  }
  addNewLessonHandler() {
    this.router.navigate(["lessons","new"])
  }
}
