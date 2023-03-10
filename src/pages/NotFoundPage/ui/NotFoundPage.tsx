import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return <div className={cn(cls.NotFoundPage, {}, [className])}>{t('Страница не найдена')}</div>;
};

export default NotFoundPage;
