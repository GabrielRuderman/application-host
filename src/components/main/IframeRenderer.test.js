import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import IframeRenderer from './IframeRenderer';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: key => key,
  }),
}));

describe('IframeRenderer component', () => {
  test('Renders IframeRenderer component with show button initially', () => {
    render(
      <IframeRenderer
        title="Test IFrame"
        id="testIframe"
        src="http://example.com"
        showButtonText="Show IFrame"
        hideButtonText="Hide IFrame"
      />
    );

    // Verifica que el botón de mostrar se renderiza
    const showButton = screen.getByText('Show IFrame');
    expect(showButton).toBeInTheDocument();

    // Verifica que el iframe no está presente inicialmente
    expect(screen.queryByTitle('Test IFrame')).not.toBeInTheDocument();
  });

  test('Shows the iframe when button is clicked', async () => {
    render(
      <IframeRenderer
        title="Test IFrame"
        id="testIframe"
        src="http://example.com"
        showButtonText="Show IFrame"
        hideButtonText="Hide IFrame"
      />
    );

    // Verifica que el iframe no está presente inicialmente
    expect(screen.queryByTitle('Test IFrame')).not.toBeInTheDocument();

    // Simula un clic en el botón de mostrar
    const showButton = screen.getByText('Show IFrame');
    fireEvent.click(showButton);

    // Espera a que el estado se actualice de manera asincrónica
    await screen.findByTitle('Test IFrame');

    // Verifica que el iframe está presente después de hacer clic
    expect(screen.getByTitle('Test IFrame')).toBeInTheDocument();

    // Verifica que el botón de ocultar se renderiza después de hacer clic
    const hideButton = screen.getByText('Hide IFrame');
    expect(hideButton).toBeInTheDocument();
  });
});
