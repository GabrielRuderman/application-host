import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { impactLanguageToIframes } from '../../utils/iframesManager';
import i18n from '../../utils/i18n';
import Button from '../utils/Button';

const IframeRenderer = ({ title, id, src, showButtonText, hideButtonText }) => {
    const [iframeIsVisible, setIframeIsVisible] = useState(false);
    const { t } = useTranslation();

    return (
        <>
            {iframeIsVisible &&
                <iframe
                    height='100%'
                    title={title}
                    id={id}
                    src={src}
                    onLoad={() => impactLanguageToIframes(i18n.language)}
                />
            }
            <Button onClick={() => setIframeIsVisible(!iframeIsVisible)}>
                {t(iframeIsVisible ? hideButtonText : showButtonText)}
            </Button>
        </>
  );
}

export default IframeRenderer;