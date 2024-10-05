import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';
import { StudentModule } from './modules/student/student.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { ExamModule } from './modules/exam/exam.module';
import { DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainLayoutComponent,
    CommonModule,
    StudentModule,
    LessonModule,
    ExamModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: 'DD/MM/YYYY', // format for input
        },
        display: {
          dateInput: 'DD/MM/YYYY', // format for the input field
          monthYearLabel: 'MMM YYYY', // format for month/year in the date picker
          dateA11yLabel: 'LL', // format for accessibility
          monthYearA11yLabel: 'MMMM YYYY', // format for month/year accessibility
        },
      }
    } // Use your custom formats


  ],
})
export class AppComponent {
  title = 'myangularapp3';
}
