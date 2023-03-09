import { cn } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={cn('app', { hovered: true, active: true }, [theme, 'cls2'])}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
