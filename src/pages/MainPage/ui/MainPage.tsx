import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('mainPage');

  return <div>{t('Главная страница')}</div>;
}

export default MainPage;
