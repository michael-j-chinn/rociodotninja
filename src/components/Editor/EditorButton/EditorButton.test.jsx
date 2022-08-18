import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditorButton from './EditorButton';

const defaultIcon = 'format_bold';
const mockOnClick = jest.fn();

test('button renders with icon', () => {
  render(<EditorButton icon={defaultIcon} onClick={mockOnClick} />);
  const editorButton = screen.getByRole('button');
  expect(editorButton).toHaveTextContent(defaultIcon);
});

test('button click triggers onClick function', () => {
  render(<EditorButton icon={defaultIcon} onClick={mockOnClick} />);
  const editorButton = screen.getByRole('button');
  fireEvent.click(editorButton);
  expect(mockOnClick.mock.calls.length).toBe(1);
});

test('button key press triggers onClick function', () => {
  render(<EditorButton icon={defaultIcon} onClick={mockOnClick} />);
  const editorButton = screen.getByRole('button');
  fireEvent.keyPress(editorButton, { key: 'Enter', charCode: 13 });
  expect(mockOnClick.mock.calls.length).toBe(1);
});
