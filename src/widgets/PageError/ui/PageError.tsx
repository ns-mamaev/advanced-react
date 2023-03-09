import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const reloadPage = () => {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

export function PageError({ className }: PageErrorProps) {
  const { t } = useTranslation('pageError');
  return (
    <div className={cn(cls.PageError, {}, [className])}>
      <p className={cls.label}>{t('Произошла непредвиденная ошибка')}</p>
      <Button className={cls.reloadBtn} onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
}
