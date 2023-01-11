import { Component } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game!: Game;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(){
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game)
  }

  takeCard(){
      if(!this.pickCardAnimation)
    {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      console.log('new card is ' + this.currentCard);
      console.log( this.game)

      this.pickCardAnimation = true;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard as string);
        this.pickCardAnimation = false;
      }, 1500);
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      this.game.players.push(name);
    });
  }
}
