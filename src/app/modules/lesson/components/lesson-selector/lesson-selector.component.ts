import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-selector',
  templateUrl: './lesson-selector.component.html',
  styleUrl: './lesson-selector.component.scss'
})
export class LessonSelectorComponent {
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
