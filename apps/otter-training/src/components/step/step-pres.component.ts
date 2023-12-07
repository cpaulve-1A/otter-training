import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import { O3rComponent } from '@o3r/core';
import { StepPresContext } from './step-pres.context';

@O3rComponent({ componentType: 'Component' })
@Component({
    selector: 'app-step-pres',
    templateUrl: './step-pres.template.html',
    styleUrls: ['./step-pres.style.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepPresComponent implements StepPresContext {
  @Input()
  public title: string = "";
  @Input()
  public size: 'reduced' | 'full' | 'standard' = 'standard';
}
