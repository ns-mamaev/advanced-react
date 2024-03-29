import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export function Counter() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button theme={ButtonTheme.OUTLINE} data-testid='increment-button' onClick={increment}>
        {t('увеличить')}
      </Button>
      <Button theme={ButtonTheme.OUTLINE} data-testid='decrement-button' onClick={decrement}>
        {t('уменьшить')}
      </Button>
    </div>
  );
}
