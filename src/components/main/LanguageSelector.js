import React from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage, getLanguageOptions } from '../../utils/i18n';
import Select from '../utils/Select';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    return (
        <Select options={getLanguageOptions()} onChange={changeLanguage} value={i18n.language} />
    );
}

export default LanguageSelector;