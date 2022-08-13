import React from 'react';
import { render, screen } from '@testing-library/react';
import EditorButton from './EditorButton';

const mockOnClick = jest.fn();

test('renders button', () => {
  const expectedText = 'format_bold';
  render(<EditorButton icon={expectedText} onClick={mockOnClick} />);
  const editorButton = screen.getByRole('button');
  expect(editorButton).toHaveTextContent(expectedText);
});
