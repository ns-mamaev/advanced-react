import { cn } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

function App() {
  const { theme } = useTheme();

  return (
    <div className={cn('app', { hovered: true, active: true }, [theme, 'cls2'])}>
      <Suspense fallback="load..">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
