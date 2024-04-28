// src/App.test.js
import { render, screen } from '@testing-library/react';
import Home from '../pages/home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
