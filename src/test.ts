export function SomeFn(arg: number): never {
  console.log('RANDOM FN 123');

  throw new Error('ОШИБКА');
}
