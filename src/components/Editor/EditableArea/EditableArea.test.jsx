import React from 'react';
import { render, screen } from '@testing-library/react';
import EditableArea from './EditableArea';

test('renders empty editable area', () => {
  render(<EditableArea />);
  const element = screen.getByTestId('editable-area');
  expect(element).toBeInTheDocument();
  expect(element).toBeEmptyDOMElement();
});
