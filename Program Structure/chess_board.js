let size = 8;
let chessBoard = '';


for (let line = 0; line < size; line++) {
    for (let column = 0; column < size; column++) {
        if ((line + column) % 2 == 0) {
            chessBoard += ' ';
        } else {
            chessBoard += '#';
        }
    }
    chessBoard += '\n';
}

console.log(chessBoard);