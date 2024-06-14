import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TileComponent } from '@root/src/shared/ui/tile/tile.component';
import { TilesFactory } from './model/tiles-factory.service';
import { RaquetComponent } from '../raquet/raquet.component';
import { BallComponent } from '../ball/ball.component';
import { PxConvertPipe } from '@root/src/shared/ui/pipes/px-convert.pipe';

@Component({
    selector: 'ark-field',
    standalone: true,
    imports: [RaquetComponent, BallComponent, PxConvertPipe],
    templateUrl: './field.component.html',
    styleUrl: './field.component.scss'
})
export class FieldComponent implements AfterViewInit {
    @ViewChild('field', {read: ViewContainerRef}) field: ViewContainerRef;
    @ViewChild('raquet') raquet: RaquetComponent;

    get fieldWidth() {
        // 20 - padding
        return this.tilesFactory.fieldSize.width;
    }
    get fieldHeight() {
        return this.tilesFactory.fieldSize.height;
    }
    get raquetTop() {
        return this.tilesFactory.fieldSize.height - 50;
    }
    get raquetPathLength() {
        return this.tilesFactory.fieldSize.width;
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

        this.raquet
    }
}
