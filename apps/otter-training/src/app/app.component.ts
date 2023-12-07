import { Component } from '@angular/core';
import { exerciseOneData } from '../data/exercise-one';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'otter-training';
  data = exerciseOneData;
}
