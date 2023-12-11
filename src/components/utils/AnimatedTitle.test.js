import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnimatedTitle from './AnimatedTitle';

test('Renders Title component', () => {
    render(<AnimatedTitle>Welcome</AnimatedTitle>);
    const titleElement = screen.getByText('Welcome');
    expect(titleElement).toBeInTheDocument();
});