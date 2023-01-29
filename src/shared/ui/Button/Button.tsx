import cls from './Button.module.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear-inverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export function Button(props: ButtonProps) {
  const { className, children, theme, ...restProps } = props;

  return (
    <button {...restProps} className={cn(cls.Button, {}, [className, cls[theme]])}>
      {children}
    </button>
  );
}
