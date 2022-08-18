import React from 'react';
import { render, screen } from '@testing-library/react';
import EditorBar from './EditorBar';

test('editor bar renders empty', () => {
  render(<EditorBar />);
  const editorBar = screen.getByRole('toolbar');
  expect(editorBar).toBeEmptyDOMElement();
});

const mockOnClick = jest.fn();

test('editor bar renders child button', () => {
  const buttonOption = { icon: 'format_bold', onClick: mockOnClick };
  render(<EditorBar buttonOptions={[buttonOption]} />);
  const editorButton = screen.getByRole('button');
  expect(screen.getByRole('toolbar')).toContainElement(editorButton);
});

test('editor bar renders multiple buttons', () => {
  const buttonOptions = [
    { icon: 'format_bold', onClick: mockOnClick },
    { icon: 'format_italic', onClick: mockOnClick },
  ];
  render(<EditorBar buttonOptions={buttonOptions} />);
  const editorButtons = screen.getAllByRole('button');
  expect(editorButtons.length).toBe(2);
});
