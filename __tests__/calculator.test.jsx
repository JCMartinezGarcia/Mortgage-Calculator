import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../src/components/calculator/Calculator';
import { describe } from 'node:test';


describe('Calculator Component', () => {
    test('renders without crashing', () => {
        render(<Calculator mrt={100000} rt={5} yrs={30} />);
    });

    test('calculates monthly payment correctly', () => {
        const { getByLabelText, getByText } = render(
            <Calculator mrt={100000} rt={5} yrs={30} />
        );

        // Simulate user input
        fireEvent.change(getByLabelText('Amount'), { target: { value: 200000 } });
        fireEvent.change(getByLabelText('Rate'), { target: { value: 4 } });
        fireEvent.change(getByLabelText('Years'), { target: { value: 15 } });

        // Ensure the component re-renders and the monthly payment is updated
        expect(getByText('Monthly Payment:')).toBeInTheDocument();
        expect(getByText('1479.38')).toBeInTheDocument(); // Replace with the expected value
    });
});

