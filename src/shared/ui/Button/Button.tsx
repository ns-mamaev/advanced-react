import { cn } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear-inverted',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, type = 'button', ...restProps
  } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} {...restProps} className={cn(cls.Button, {}, [className, cls[theme]])}>
      {children}
    </button>
  );
};
