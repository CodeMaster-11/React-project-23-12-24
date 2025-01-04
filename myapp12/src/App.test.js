import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const countElement = screen.getByText(/Count:/i);
  const btnIncrement = screen.getByText(/Increment/i);

  
});
