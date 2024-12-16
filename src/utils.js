export const isBoardFull = (board) => {
    return board.every(row => row.every(cell => cell !== null));
}

const isRowWin = (board, player) => {
    return board.some(row => row.every(cell => cell === player));
}

const isColumnWin = (board, player) => {
    for (let col = 0; col < board.length; col++) {
        if (board.every(row => row[col] === player)) {
            return true;
        }
    }
}

const isForwardDiagonalWin = (board, player) => {
    let res = false;
    for (let i = 0; i < board.length; i++) {
        if (board[i][i] !== player) {
            res = player;
        }
    }
    return res;
}

const isBackwardDiagonalWin = (board, player) => {
    let res = false;
    for (let i = 0; i < board.length; i++) {
        if (board[i][board.length - 1 - i] !== player) {
            res = player;
        }
    }
    return res;
}

const isDiagonalWin = (board, player) => {
    isForwardDiagonalWin(board, player) || isBackwardDiagonalWin(board, player);
}

const isPlayerWinner = (board, player) => {
    return isRowWin(board, player) || isColumnWin(board, player) || isDiagonalWin(board, player);
}

export const getWinner = (board) => {
    return isPlayerWinner(board, 'X') ? 'X' : isPlayerWinner(board, 'O') ? 'O' : false;
}
