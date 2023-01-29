import { useTheme } from 'app/providers/ThemeProvider';
import { cn } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', { hovered: true, active: true }, [theme, 'cls2'])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
}

export default App;
