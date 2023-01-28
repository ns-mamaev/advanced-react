import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { cn } from './helpers/classNames/classNames';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', { hovered: true, active: true }, [theme, 'cls2'])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
