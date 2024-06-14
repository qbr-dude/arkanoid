import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { GameService } from '../field/model/game.service';
import { BehaviorSubject, interval } from 'rxjs';

@Component({
    selector: 'ark-ball',
    standalone: true,
    imports: [],
    templateUrl: './ball.component.html',
    styleUrl: './ball.component.scss'
})
export class BallComponent implements AfterContentInit {

    xPosition = new BehaviorSubject(0);

    tick$ = interval(500);

    constructor(
        private gameService: GameService
    ) {
    }
    
    ngAfterContentInit(): void {
        
    }
}
