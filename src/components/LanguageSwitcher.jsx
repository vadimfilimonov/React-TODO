import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { ENGLISH_LANGUAGE, RUSSIAN_LANGUAGE } from '../consts';
import { setCurrentLanguageToStorage } from '../helpers/storage';

const switcherHashmap = {
  [RUSSIAN_LANGUAGE]: ENGLISH_LANGUAGE,
  [ENGLISH_LANGUAGE]: RUSSIAN_LANGUAGE,
};

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const handleToggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = switcherHashmap[currentLanguage];
    i18n.changeLanguage(newLanguage);
    setCurrentLanguageToStorage(newLanguage);
  };

  return (
    <Button size="small" onClick={handleToggleLanguage}>
      {t('currentLanguage')}
    </Button>
  );
}

export default LanguageSwitcher;
