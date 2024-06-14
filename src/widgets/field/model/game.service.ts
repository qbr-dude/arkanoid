import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, interval, take, tap, withLatestFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GameService { // TODO move somewhere else
    private defaultTickRate = 500;
    
    // find better name
    gameActive$ = new BehaviorSubject(false);

    tick$ = interval(this.defaultTickRate).pipe(
        withLatestFrom(this.gameActive$),
        filter(([_, active]) => active),
        tap(() => console.log('next'))
    );

    start() {
        this.gameActive$.next(false);
    }
}