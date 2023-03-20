import { cn } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear-inverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  long?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, type, size = 'button', long, ...restProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.long]: long,
    [cls[size]]: true,
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} {...restProps} className={cn(cls.Button, mods, [className, cls[theme]])}>
      {children}
    </button>
  );
};
