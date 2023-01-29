import cls from './Navbar.module.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <ThemeSwitcher className={''} />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.INVERTED} className={cls.link} to={'/'}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} className={cls.link} to={'/about'}>
          About
        </AppLink>
      </div>
    </div>
  );
}
