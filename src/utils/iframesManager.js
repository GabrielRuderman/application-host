const iframesIds = [
    'rickAndMortyIframe',
    'harryPotterIframe',
];

export const impactLanguageToIframes = (language) => {
    iframesIds.forEach(iframeId => {
        const iframe = document.getElementById(iframeId);
        if (iframe) {
            iframe.contentWindow.postMessage({ type: 'LANGUAGE_CHANGE', language: language }, '*');
        }
    });
};
