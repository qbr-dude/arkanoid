import { AfterViewInit, Component, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TileComponent } from '@ui/tile/tile.component';
import { FieldComponent } from '../widgets/field/field.component';
import { GameService } from '../widgets/field/model/game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'arkanoid';

  constructor(private gameService: GameService) {}

  startGame() {

  }
}
