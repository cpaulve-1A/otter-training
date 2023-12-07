import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { O3rComponent } from '@o3r/core';
import { ResultPresContext } from './result-pres.context';
@O3rComponent({ componentType: 'Component' })
@Component({
    selector: 'app-result-pres',
    templateUrl: './result-pres.template.html',
    styleUrls: ['./result-pres.style.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultPresComponent implements ResultPresContext {
}
