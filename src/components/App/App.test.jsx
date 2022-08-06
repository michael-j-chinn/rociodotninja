import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@testing-library/jest-dom';
import App from './App';

test('renders empty App', () => {
  render(<App />);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeEmptyDOMElement();
});
