import i18n, { getLanguageOptions, changeLanguage } from './i18n';

jest.mock('./iframesManager', () => ({
    impactLanguageToIframes: jest.fn(),
}));

describe('i18n module', () => {
    beforeEach(() => {
        // Reinicia el estado de i18n antes de cada prueba
        i18n.changeLanguage('en');
    });

    test('getLanguageOptions returns language options', () => {
        const languageOptions = getLanguageOptions();
        expect(languageOptions).toEqual([
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
        ]);
    });

    test('changeLanguage updates language and impacts iframes', () => {
        const mockEvent = { target: { value: 'es' } };
        changeLanguage(mockEvent);
        expect(i18n.language).toBe('es');
        expect(require('./iframesManager').impactLanguageToIframes).toHaveBeenCalledWith('es');
    });
});
