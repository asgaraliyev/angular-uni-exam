import { Routes } from '@angular/router';
import { StudentTableComponent } from './modules/student/components/student-table/student-table.component';
import { NewStudentComponent } from './modules/student/components/new-student/new-student.component';
import { EditStudentComponent } from './modules/student/components/edit-student/edit-student.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { LessonTableComponent } from './modules/lesson/components/lesson-table/lesson-table.component';
import { NewLessonComponent } from './modules/lesson/components/new-lesson/new-lesson.component';
import { EditLessonComponent } from './modules/lesson/components/edit-lesson/edit-lesson.component';
import { ExamTableComponent } from './modules/exam/components/exam-table/exam-table.component';

export const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        children: [
            {
                path: "students",
                component: StudentTableComponent,
            },
            {
                path: "",
                pathMatch: "full",
                redirectTo:"students"
            },
            {
                path: "students/new",
                component: NewStudentComponent,
                pathMatch:"full"
            },
            {
                path: "students/:id",
                component: EditStudentComponent,
            },


            {
                path: "lessons",
                component: LessonTableComponent,
            },
            {
                path: "",
                pathMatch: "full",
                redirectTo: "lessons"
            },
            {
                path: "lessons/new",
                component: NewLessonComponent,
                pathMatch: "full"

            },
            {
                path: "lessons/:id",
                component: EditLessonComponent,
            },

            



            {
                path: "exams",
                component: ExamTableComponent,
            },
            {
                path: "",
                pathMatch: "full",
                redirectTo: "exams"
            },
            {
                path: "exams/new",
                component: NewLessonComponent,
                pathMatch: "full"

            },
            {
                path: "exams/:id",
                component: EditLessonComponent,
            },

        ]
    }

];
