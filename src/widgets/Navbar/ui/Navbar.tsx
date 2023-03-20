import { cn } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <div className={cls.links} />
    </div>
  );
}
