import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
  const state: CounterSchema = { value: 10 };
  test('should increment', () => {
    expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
  });
  test('should decrement', () => {
    expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
  });
  test('should work with empty', () => {
    expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 });
  });
});
