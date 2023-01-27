import { useState } from 'react';
import classNames from './Counter.module.scss';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={classNames.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
}

export default Counter;
