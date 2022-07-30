import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeEmptyDOMElement();
});
