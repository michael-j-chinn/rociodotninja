import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders empty App', () => {
  render(<App />);
  expect(screen.getByRole('main')).toBeEmptyDOMElement();
});
