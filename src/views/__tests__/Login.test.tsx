import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

test('renders login form', () => {
  render(<MemoryRouter><Login /></MemoryRouter>);
  expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign in/i })).toBeEnabled();
});
