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
  showInfo: boolean = true;

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
      this.showInfo = false;
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      console.log('new card is ' + this.currentCard);
      console.log( this.game)

      this.pickCardAnimation = true;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard as string);
        this.pickCardAnimation = false;
        this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length;

      }, 1500);
    }

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if( name && name.length > 0){
        this.game.players.push(name);

      }
    });
  }
}
