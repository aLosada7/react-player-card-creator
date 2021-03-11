import { render, screen } from '@testing-library/react';
import App from './App';

describe("sides exists", () => {

    beforeEach(() => {
        render(<App />);
    })

    test('renders player-creator', () => {
        const element = screen.getByTestId('player-creator')
        expect(element).toBeInTheDocument();
    });

    test('renders player-preview', () => {
        const element = screen.getByTestId('player-preview')
        expect(element).toBeInTheDocument();
    });
})
