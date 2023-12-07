import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { O3rComponent } from '@o3r/core';
import { MyComponentPresContext } from './my-component-pres.context';
@O3rComponent({ componentType: 'Component' })
@Component({
    selector: 'app-my-component-pres',
    templateUrl: './my-component-pres.template.html',
    styleUrls: ['./my-component-pres.style.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponentPresComponent implements MyComponentPresContext {
}
