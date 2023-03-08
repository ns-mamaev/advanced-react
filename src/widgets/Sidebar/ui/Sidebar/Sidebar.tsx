import { cn } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button type='button' className={cls.sidebarSwitcher} onClick={onToggle}>
        toggle
      </button>
      <div className={cn(cls.switchers, { [cls.switchers_collapsed]: collapsed }, [])}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}
