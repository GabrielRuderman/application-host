import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { impactLanguageToIframes } from './iframesManager';

const resources = {
  en: {
    translation: {
      english: 'English',
      spanish: 'Spanish',
      welcomeText: 'Welcome!',
      buttonText: 'Switch to Spanish',
      showRickAndMortyCharacters: 'Show Rick and Morty characters',
      hideRickAndMortyCharacters: 'Hide Rick and Morty characters',
      showHarryPotterCharacters: 'Show Harry Potter characters',
      hideHarryPotterCharacters: 'Hide Harry Potter characters',
    },
  },
  es: {
    translation: {
      english: 'Inglés',
      spanish: 'Español',
      welcomeText: '¡Bienvenido!',
      buttonText: 'Cambiar a inglés',
      showRickAndMortyCharacters: 'Mostrar personajes de Rick and Morty',
      hideRickAndMortyCharacters: 'Ocultar personajes de Rick and Morty',
      showHarryPotterCharacters: 'Mostrar personajes de Harry Potter',
      hideHarryPotterCharacters: 'Ocultar personajes de Harry Potter',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const getLanguageOptions = () => {
  return [
    {value: 'en', label: i18n.t('english')},
    {value: 'es', label: i18n.t('spanish')},
  ];
};

export const changeLanguage = (e) => {
  i18n.changeLanguage(e.target.value);
  impactLanguageToIframes(i18n.language);
};

export default i18n;