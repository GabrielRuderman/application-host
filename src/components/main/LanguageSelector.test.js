import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSelector from './LanguageSelector';
import { changeLanguage } from '../../utils/i18n';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
        resources: {},
        lng: 'en',
        interpolation: {
        escapeValue: false,
    }
});

jest.mock('../../utils/i18n', () => ({
    changeLanguage: jest.fn(),
    getLanguageOptions: () => [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Spanish' },
    ],
}));

test('Changes language when Select is changed', async () => {
    render(<LanguageSelector />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'es' } });
    expect(changeLanguage).toHaveBeenCalled();
});