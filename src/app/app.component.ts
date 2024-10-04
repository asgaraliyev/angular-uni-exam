import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';
import { StudentModule } from './modules/student/student.module';
import { LessonModule } from './modules/lesson/student.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainLayoutComponent,CommonModule,StudentModule,LessonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myangularapp3';
}
