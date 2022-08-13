import React from 'react';
import { render, screen } from '@testing-library/react';
import EditorBar from './EditorBar';

test('renders editor bar', () => {
  render(<EditorBar />);
  const editorBar = screen.getByRole('toolbar');
  expect(editorBar).toBeInTheDocument();
  expect(editorBar).toBeEmptyDOMElement();
});

const mockOnClick = jest.fn();

test('renders editor bar with buttons', () => {
  const buttonOption = { icon: 'format_bold', onClick: mockOnClick };
  render(<EditorBar buttonOptions={[buttonOption]} />);
  expect(screen.getByRole('toolbar')).not.toBeEmptyDOMElement();
});
