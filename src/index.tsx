import { SomeFn } from './test';
import { createRoot } from 'react-dom/client';
import App from './components/App';

SomeFn(123);

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
