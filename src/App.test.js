import {render, screen} from '@testing-library/react';
import App from './App';

test('renders Tic Tac Toe heading', () => {
    render(<App/>);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent(/Tic Tac Toe/i);
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
