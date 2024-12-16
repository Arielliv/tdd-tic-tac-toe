import './App.css';
import {useState} from "react";

const Cell = ({currentPlayerSign, toggleCurrentPlayerSign}) => {
    const [val, setVal] = useState(null);

    const onClickHandler = () => {
        if (val === null) {
            setVal(currentPlayerSign);
            toggleCurrentPlayerSign();
        }
    }

    return <td onClick={onClickHandler}>{val}</td>;
};

const Row = ({currentPlayerSign, toggleCurrentPlayerSign}) => (
    <tr>
        {[1, 2, 3].map((index) =>
            <Cell
                key={index}
                currentPlayerSign={currentPlayerSign}
                toggleCurrentPlayerSign={toggleCurrentPlayerSign}
            />
        )}
    </tr>
);

function App() {
    const [currentPlayerSign, setCurrentPlayerSign] = useState('X');
    const toggleCurrentPlayerSign = () =>
        currentPlayerSign === 'X' ? setCurrentPlayerSign('O') : setCurrentPlayerSign('X');


    return (<div className="App">
        <header className="App-header">
            <h1>Tic Tac Toe</h1>
            <h2>Current player is: {currentPlayerSign}</h2>
            <table>
                <tbody>
                {[1, 2, 3].map((index) =>
                    <Row
                        key={index}
                        currentPlayerSign={currentPlayerSign}
                        toggleCurrentPlayerSign={toggleCurrentPlayerSign}
                    />
                )}
                </tbody>
            </table>
        </header>
    </div>);
}

export default App;
