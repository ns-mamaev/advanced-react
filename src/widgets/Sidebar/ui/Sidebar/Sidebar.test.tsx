import { fireEvent, screen } from '@testing-library/react';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('rendered in document', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('test toggle sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
