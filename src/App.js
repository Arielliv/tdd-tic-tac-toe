import './App.css';
import {useState} from "react";

const Cell = () => {
    const [val, setVal] = useState(0);
    return <td onClick={() => setVal((val + 1))}>{val}</td>
};

const Row = () => {
    return (
        <tr>
            <Cell/>
            <Cell/>
            <Cell/>
        </tr>
    );
};

function App() {
    return (<div className="App">
        <header className="App-header">
            <h1>Tic Tac Toe</h1>
            <table>
                <tbody>
                <Row/>
                <Row/>
                <Row/>
                </tbody>
            </table>
        </header>
    </div>);
}

export default App;
