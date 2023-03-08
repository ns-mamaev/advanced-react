import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR_INVERTED}
      onClick={onToggle}
      className={cn('', {}, [className])}>
      {t('язык')}
    </Button>
  );
}
