import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: key => key,
    i18n: { language: 'en' },
  }),
}));

jest.mock('./utils/i18n', () => ({
  changeLanguage: jest.fn(),
  getLanguageOptions: () => [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
  ],
}));

describe('App component', () => {
  test('Renders App component with initial state', () => {
    render(<App />);

    // Verifica que el logo se renderiza
    expect(screen.getByAltText('logo')).toBeInTheDocument();

    // Verifica que el titulo animado se renderiza
    expect(screen.getByText('welcomeText')).toBeInTheDocument();

    // Verifica que los botones se renderizan
    expect(screen.getByText('showRickAndMortyCharacters')).toBeInTheDocument();
    expect(screen.getByText('showHarryPotterCharacters')).toBeInTheDocument();

    // Verifica que el componente Select se renderiza
    expect(screen.getByRole('combobox')).toBeInTheDocument();

    // Verifica que las opciones de idioma se renderizan
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Spanish')).toBeInTheDocument();
  });
});