import React from 'react';
import { render, screen } from '@testing-library/react';
import EditableArea from './EditableArea';

test('editable area to render empty', () => {
  render(<EditableArea />);
  const element = screen.getByRole('textbox');
  expect(element).toBeEmptyDOMElement();
});

test('editable area to render inital content', () => {
  const expectedContent = 'Start here';
  render(<EditableArea content={expectedContent} />);
  const element = screen.getByRole('textbox');
  expect(element).toHaveTextContent(expectedContent);
});

test('editable area to render inital content with rich text', () => {
  const expectedContent = 'Start <b>here</b>!';
  render(<EditableArea content={expectedContent} />);
  const element = screen.getByRole('textbox');
  expect(element).toContainHTML(expectedContent);
});

test('editable area is in focus by default', () => {
  render(<EditableArea />);
  const element = screen.getByRole('textbox');
  expect(element).toHaveFocus();
});
