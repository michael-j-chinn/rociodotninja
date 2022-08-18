import React from 'react';
import { render, screen } from '@testing-library/react';
import Editor from './Editor';

test('renders editor', () => {
  render(<Editor />);
  const editor = screen.getByTestId('editor');
  expect(editor).toBeInTheDocument();
  expect(editor).toContainElement(screen.getByRole('toolbar'));
  expect(editor).toContainElement(screen.getByRole('textbox'));
});
