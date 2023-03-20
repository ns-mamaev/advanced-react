import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

// компонент для тестрирования
export function BugButton() {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const { t } = useTranslation();
  return (
    <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onThrow}>
      {t('Ошибка')}
    </Button>
  );
}
