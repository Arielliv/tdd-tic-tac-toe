import './App.css';
import {useState} from "react";
import {getWinner, isBoardFull} from "./utils";

const Cell = ({val, onCellClicked}) => {
    return <td onClick={onCellClicked}>{val}</td>;
};

const Row = ({cells, onCellClicked, index}) => (
    <tr>
        {cells.map((val, cellIndex) =>
            <Cell
                key={cellIndex}
                val={val}
                onCellClicked={() => onCellClicked(index, cellIndex)}
            />
        )}
    </tr>
);

const initBoard = (n) => {
    const board = [];
    for (let i = 0; i < n; i++) {
        board.push([]);
        for (let j = 0; j < n; j++) {
            board[i].push(null);
        }
    }

    return board;
}

const cloneBoard = (board) => board.map(row => [...row]);

function App() {
    const [currentPlayerSign, setCurrentPlayerSign] = useState('X');
    const [board, setBoard] = useState(initBoard(3));
    const [isGameOver, setIsGameOver] = useState(false);
    const [winner, setWinner] = useState(false);

    const toggleCurrentPlayerSign = () =>
        currentPlayerSign === 'X' ? setCurrentPlayerSign('O') : setCurrentPlayerSign('X');

    const onCellClicked = (rowIndex, cellIndex) => {
        if (board[rowIndex][cellIndex] === null && !winner) {
            const clonedBoard = cloneBoard(board);
            clonedBoard[rowIndex][cellIndex] = currentPlayerSign;
            setBoard(clonedBoard);
            const winnerSign = getWinner(clonedBoard);
            if (winnerSign) {
                setWinner(winnerSign);
                setIsGameOver(true);
            } else if (isBoardFull(clonedBoard)) {
                setIsGameOver(true);
            } else {
                toggleCurrentPlayerSign();
            }

        }
    }

    const message = winner ? `Winner is: ${winner}` : isGameOver ? 'Game Over' : `Current player is: ${currentPlayerSign}`

    return (<div className="App">
        <header className="App-header">
            <h1>Tic Tac Toe</h1>
            <h2>{message}</h2>
            <table>
                <tbody>
                {board.map((cells, index) =>
                    <Row
                        key={index}
                        index={index}
                        cells={cells}
                        onCellClicked={onCellClicked}
                    />
                )}
                </tbody>
            </table>
        </header>
    </div>);
}

export default App;
