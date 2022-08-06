import React from 'react';
import { render, screen } from '@testing-library/react';
import EditorButton from './EditorButton';

const mockOnClick = jest.fn();

test('renders button with text', () => {
  const expectedText = 'test';
  render(<EditorButton text={expectedText} onClick={mockOnClick} />);
  const editorButton = screen.getAllByText(expectedText)[0];
  expect(editorButton).toHaveTextContent(expectedText);
});
