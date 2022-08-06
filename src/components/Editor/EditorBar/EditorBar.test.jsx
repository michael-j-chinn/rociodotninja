import React from 'react';
import { render, screen } from '@testing-library/react';
import EditorBar from './EditorBar';

test('renders editor bar', () => {
  render(<EditorBar />);
  const editorBar = screen.getByTestId('editor-bar-container');
  expect(editorBar).toBeInTheDocument();
  expect(editorBar).toBeEmptyDOMElement();
});

const mockOnClick = jest.fn();

test('renders editor bar with buttons', () => {
  const buttonOption = { text: 'foo', onClick: mockOnClick };
  render(<EditorBar buttonOptions={[buttonOption]} />);
  expect(screen.getByTestId('editor-bar-container')).not.toBeEmptyDOMElement();
});
