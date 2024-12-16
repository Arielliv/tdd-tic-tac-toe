import {render, screen} from '@testing-library/react';
import App from './App';

test('renders Tic Tac Toe heading', () => {
    render(<App/>);
    const [headingElement] = screen.getAllByRole('heading');
    expect(headingElement).toHaveTextContent(/Tic Tac Toe/i);
});

test('should render current player', () => {
    render(<App/>);
    const headingElement = screen.getByText(/current player/i);
    expect(headingElement).toBeInTheDocument();
});

test('render Tic Tac Toe table', () => {
    render(<App/>);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3);
    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(9);
});

test('cell click - should render current player', () => {
    render(<App/>);
    const [cell1, cell2] = screen.getAllByRole('cell');
    expect(cell1).toBeEmptyDOMElement();
    cell1.click();
    expect(cell1).toHaveTextContent('X');
    cell1.click();
    expect(cell1).toHaveTextContent('X'); // should stay 'x'

    expect(cell2).toBeEmptyDOMElement();
    cell2.click();
    expect(cell2).toHaveTextContent('O');
})

