import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { Language } from 'utils/enums';

export const LanguageButton: React.FC = () => {
	const { i18n, t } = useTranslation();
	const currentLanguage = i18n.language as Language;

	const handleLanguageChange = () => {
		const newLanguage =
			currentLanguage === Language.english ? Language.ukrainian : Language.english;
		i18n.changeLanguage(newLanguage);
	};

	return (
		<Button onClick={handleLanguageChange} variant="contained">
			{currentLanguage === Language.english
				? t('languageButton.switchToUkrainian')
				: t('languageButton.switchToEnglish')}
		</Button>
	);
};
