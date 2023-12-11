import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select from './Select';

const mockOnChange = jest.fn();

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

test('Renders Select component', () => {
    render(<Select value="option2" options={options} onChange={mockOnChange} />);

    // Verifica que el elemento select se haya renderizado correctamente
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    // Verifica que las opciones se hayan renderizado correctamente
    options.forEach(option => {
        const optionElement = screen.getByText(option.label);
        expect(optionElement).toBeInTheDocument();
        expect(optionElement.value).toBe(option.value);
    });

    // Verifica que el valor y la funcion onChange esten configurados correctamente
    expect(selectElement).toHaveValue('option2');

    // Simula un cambio en el elemento select
    selectElement.value = 'option3';
    fireEvent.change(selectElement);

    // Verifica que la funcion onChange fue llamada
    expect(mockOnChange).toHaveBeenCalled();
});