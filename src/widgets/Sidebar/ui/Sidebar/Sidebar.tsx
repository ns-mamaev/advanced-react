import { cn } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import InfoIcon from 'shared/assets/icons/info.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid='sidebar-toggle'
        type='button'
        className={cls.sidebarSwitcher}
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        long
        size={ButtonSize.M}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink className={cls.link} theme={AppLinkTheme.INVERTED} to={RoutePath.main}>
          <HomeIcon className={cls.linkIcon} />
          <span className={cls.linkText}>{t('Главная')}</span>
        </AppLink>
        <AppLink className={cls.link} theme={AppLinkTheme.INVERTED} to={RoutePath.about}>
          <InfoIcon className={cls.linkIcon} />
          <span className={cls.linkText}>{t('Инфо')}</span>
        </AppLink>
      </div>
      <div className={cn(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
}
