import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { O3rComponent } from '@o3r/core';
import { ComponentCreationExercisePresContext } from './component-creation-exercise-pres.context';
@O3rComponent({ componentType: 'Component' })
@Component({
    selector: 'app-component-creation-exercise-pres',
    templateUrl: './component-creation-exercise-pres.template.html',
    styleUrls: ['./component-creation-exercise-pres.style.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentCreationExercisePresComponent implements ComponentCreationExercisePresContext {
}
