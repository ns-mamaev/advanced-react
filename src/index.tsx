import { SomeFn } from './test';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/themeProvider';

SomeFn(123);

const root = createRoot(document.querySelector('#root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
