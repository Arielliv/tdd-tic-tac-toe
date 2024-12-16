import './App.css';
import {useState} from "react";

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

    const toggleCurrentPlayerSign = () =>
        currentPlayerSign === 'X' ? setCurrentPlayerSign('O') : setCurrentPlayerSign('X');

    const onCellClicked = (rowIndex, cellIndex) => {
        if (board[rowIndex][cellIndex] === null) {
            const clonedBoard = cloneBoard(board);
            clonedBoard[rowIndex][cellIndex] = currentPlayerSign;
            setBoard(clonedBoard);
            toggleCurrentPlayerSign();
        }
    }

    return (<div className="App">
        <header className="App-header">
            <h1>Tic Tac Toe</h1>
            <h2>Current player is: {currentPlayerSign}</h2>
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
