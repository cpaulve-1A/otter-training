import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { O3rComponent } from '@o3r/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {Exercise, data} from './exercise-one';


@O3rComponent({ componentType: 'Page' })
@Component({
  selector: 'o3r-exercise-one',
  templateUrl: './exercise-one.template.html',
  styleUrls: ['./exercise-one.style.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseOneComponent {
  public data: Exercise = data;
}
