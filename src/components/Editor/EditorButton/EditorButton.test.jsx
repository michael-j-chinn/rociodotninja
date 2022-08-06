import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@testing-library/jest-dom';
import EditorButton from './EditorButton';

test('renders button with text', () => {
  render(<EditorButton text="test" />);
  const editorButton = screen.getAllByText('test');
});
