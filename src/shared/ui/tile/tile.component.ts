import { Component, HostBinding, Input } from '@angular/core';
import { FieldPosition } from '@widgets/field/model/tiles-factory.service';

@Component({
    selector: 'ark-tile',
    standalone: true,
    imports: [],
    templateUrl: './tile.component.html',
    styleUrl: './tile.component.scss'
})
export class TileComponent {
    @Input() index: number;
    @Input() set position({x, y}: FieldPosition) {
        this.top = `${y}px`;
        this.left = `${x}px`;
    };

    @HostBinding('style.top') top = '0px';
    @HostBinding('style.left') left = '0px';

    get type() {
        return this.index % 5;
    }
}
