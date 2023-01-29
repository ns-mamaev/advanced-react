import { cn } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export function AppLink(props: PropsWithChildren<AppLinkProps>) {
  const { to, children, className, theme = AppLinkTheme.PRIMARY, ...restProps } = props;

  return (
    <Link {...restProps} to={to} className={cn(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
}
