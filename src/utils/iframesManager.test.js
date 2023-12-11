import { impactLanguageToIframes } from './iframesManager';

// Crea un spy para document.getElementById
const getElementByIdSpy = jest.spyOn(document, 'getElementById');

describe('iframesManager', () => {
    test('impactLanguageToIframes sends LANGUAGE_CHANGE message to iframes', () => {
        const language = 'es';
        
        // Configura el mock para getElementById
        getElementByIdSpy.mockReturnValue({
            contentWindow: {
                postMessage: jest.fn(),
            }
        });

        impactLanguageToIframes(language);

        // Verifica que getElementById se llamó para cada iframeId
        expect(getElementByIdSpy).toHaveBeenCalledTimes(2);
        expect(getElementByIdSpy).toHaveBeenCalledWith('rickAndMortyIframe');
        expect(getElementByIdSpy).toHaveBeenCalledWith('harryPotterIframe');

        // Verifica que postMessage se llamó con el mensaje correcto para cada iframe
        expect(getElementByIdSpy.mock.results[0].value.contentWindow.postMessage).toHaveBeenCalledWith(
            { type: 'LANGUAGE_CHANGE', language: 'es' },
            '*'
        );
        expect(getElementByIdSpy.mock.results[1].value.contentWindow.postMessage).toHaveBeenCalledWith(
            { type: 'LANGUAGE_CHANGE', language: 'es' },
            '*'
        );

        // Limpia el spy después de la prueba
        getElementByIdSpy.mockRestore();
    });
});
