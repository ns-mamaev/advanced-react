import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation('navbar');

  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.INVERTED} className={cls.link} to='/'>
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} className={cls.link} to='/about'>
          {t('Инфо')}
        </AppLink>
      </div>
    </div>
  );
}
