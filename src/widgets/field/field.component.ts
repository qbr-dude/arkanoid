import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TileComponent } from '@root/src/shared/ui/tile/tile.component';
import { TilesFactory } from './model/tiles-factory.service';

@Component({
    selector: 'ark-field',
    standalone: true,
    imports: [],
    templateUrl: './field.component.html',
    styleUrl: './field.component.scss'
})
export class FieldComponent implements AfterViewInit {
    @ViewChild('field', {read: ViewContainerRef}) field: ViewContainerRef;

    get fieldWidth() {
        // 20 - padding
        return `${this.tilesFactory.fieldSize.width}px`;
    }
    get fieldHeight() {
        return `${this.tilesFactory.fieldSize.height}px`;
    }

    constructor(private tilesFactory: TilesFactory) {}

    ngAfterViewInit(): void {
        const map = this.tilesFactory.createFieldMap();
        map.forEach((tilePosition, index) => {
            const ref = this.field.createComponent(TileComponent);
                        
            ref.instance.index = index;
            ref.instance.position = tilePosition;

            ref.changeDetectorRef.detectChanges();
        });
    }
}
