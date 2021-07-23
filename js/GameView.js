export default class GameView {

    constructor() {
        console.log("init game view");
    }
    updateBoard(game) {
        console.log("this of a board within GameView")
        console.log(game.board);
        for(let i = 0;i<game.board.lenght; i++){
            const tile = document.querySelector(`.board-tile[data-index="${i}"]`);
            tile.textContent =game.board[i];
        }
    }
}


