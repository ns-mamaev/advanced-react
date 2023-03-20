import { ReactNode } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
  children?: ReactNode;
}

export function Navbar({ className, children }: NavbarProps) {
  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <div className={cls.links}>{children}</div>
    </div>
  );
}
