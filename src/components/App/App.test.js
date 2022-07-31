import { render, screen } from '@testing-library/react';
import App from './App';

test('renders empty App', () => {
  render(<App />);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeEmptyDOMElement();
});
