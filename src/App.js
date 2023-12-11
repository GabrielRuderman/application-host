import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedTitle from './components/utils/AnimatedTitle';
import IframeRenderer from './components/main/IframeRenderer';
import LanguageSelector from './components/main/LanguageSelector';
import logo from './logo.jpg';
import './App.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className='main-page-div'>

      <div className='main-col-div'>
        <img src={logo} alt="logo" width='160px' height='120px' />
        <AnimatedTitle>{t('welcomeText')}</AnimatedTitle>
        <LanguageSelector />
      </div>
      
      <div className='left-col-div'>
        <IframeRenderer
          title='Rick and Morty'
          id='rickAndMortyIframe'
          src='http://localhost:3001'
          showButtonText='showRickAndMortyCharacters'
          hideButtonText='hideRickAndMortyCharacters'
        />
      </div>

      <div className='right-col-div'>
        <IframeRenderer
          title='Harry Potter'
          id='harryPotterIframe'
          src='http://localhost:3002'
          showButtonText='showHarryPotterCharacters'
          hideButtonText='hideHarryPotterCharacters'
        />
      </div>

    </div>
  );
}

export default App;