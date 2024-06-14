import { Component, Inject, Input, OnInit } from '@angular/core';
import { ElementSize, TilesFactory } from '../field/model/tiles-factory.service';
import { BehaviorSubject, filter, fromEvent, map, mergeMap, tap } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'ark-raquet',
    standalone: true,
    imports: [],
    templateUrl: './raquet.component.html',
    styleUrl: './raquet.component.scss'
})
export class RaquetComponent implements OnInit {
    private movementStep = 5; // px
    private paddind = 20;

    // TODO add boundaries
    // [?] remake logic
    // TODO maybe unite input data
    /**
     * Path from 0 to pathLength raquet can move
     */
    @Input({required: true}) pathLength: number;
    @Input() top: string; // idk, need to change to number
    get left(): string {
        return `${this.leftPosition}px`;
    }

    leftPosition = 0;

    raquetSize: ElementSize = {
        width: 100,
        height: 30
    }

    get width() {
        return `${this.raquetSize.width}px`;
    }
    get height() {
        return `${this.raquetSize.height}px`;
    }

    constructor(
        private tileFactory: TilesFactory,
        @Inject(DOCUMENT) private document: Document,
    ) {}

    ngOnInit(): void {
        fromEvent<KeyboardEvent>(this.document, 'keydown').pipe(
            filter(event => event.key === 'ArrowLeft' || event.key === 'ArrowRight'),
            // TODO maybe use merge map
            map(event => event.key.replace('Arrow', '').toLowerCase()),
            filter(str => str === 'left' || str === 'right')
        ).subscribe(dir => this.move(dir as Direction));

        this.leftPosition = this.pathLength / 2;
    }

    move(direction: Direction) {
        if(direction === 'left') {
            this.leftPosition = (this.leftPosition - this.movementStep < this.paddind) 
                ? this.paddind 
                : this.leftPosition - this.movementStep;
        } else {
            this.leftPosition = (this.leftPosition + this.movementStep > this.pathLength - this.paddind - this.raquetSize.width) 
                ? this.pathLength - this.paddind - this.raquetSize.width
                : this.leftPosition + this.movementStep;
        }
    }
}

type Direction = 'left' | 'right';