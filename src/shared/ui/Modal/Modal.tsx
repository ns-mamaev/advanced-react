import {
  ReactNode,
  MouseEvent,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Modal({
  className,
  children,
  isOpen = false,
  onClose,
}: ModalProps) {
  const CLOSING_ANIMATION_DELAY = 100;
  const [isClosing, setIsClosing] = useState(false);
  const closingTimerRef = useRef(null);
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      closingTimerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, CLOSING_ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(closingTimerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <div onClick={handleClose} className={cn(cls.Modal, mods, [className])}>
      <div onClick={onContentClick} className={cls.content}>
        {children}
      </div>
    </div>
  );
}
