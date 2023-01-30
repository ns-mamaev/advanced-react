import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('О сайте')}</h1>
      <p>{t('основной текст')}</p>
    </div>
  );
}

export default AboutPage;
