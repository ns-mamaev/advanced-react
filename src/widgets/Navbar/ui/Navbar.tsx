/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthModal((state) => !state);
  }, []);

  return (
    <div className={cn(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.link}
        onClick={onToggleModal}
      >
        {t('войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        текст модального окна есть здесь
      </Modal>
    </div>
  );
}
