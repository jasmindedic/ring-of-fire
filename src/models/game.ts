export class Game {
    public players: string[] = ['player 1', 'player 2','player 3'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor(){

        for(let i=1; i < 14; i++){
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i)
        }
        
        this.stack = shuffle(this.stack);
        
    } 
}



  function shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }