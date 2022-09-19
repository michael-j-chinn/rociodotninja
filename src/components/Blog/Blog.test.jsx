import React from 'react';
import { render, screen } from '@testing-library/react';
import Blog from './Blog';

test('renders blog', () => {
  render(
    <Blog
      id={1}
      title='Test'
      createdDate={new Date(1985, 4, 1)}
      content='Test'
    />
  );
  expect(screen.getByTestId('blog-1')).toBeInTheDocument();
});

test('renders blog content with html', () => {
  const expectedHtml = '<b>test</b>';
  render(
    <Blog
      id={1}
      title='Test'
      createdDate={new Date(1985, 4, 1)}
      content={expectedHtml}
    />
  );
  expect(screen.getByTestId('blog-1')).toContainHTML(expectedHtml);
});

test('renders blog with formatted date', () => {
  const expectedDateFormat = 'Wed May 01 1985';
  render(
    <Blog
      id={1}
      title='Test'
      createdDate={new Date(1985, 4, 1)}
      content='Test'
    />
  );
  expect(screen.getByTestId('blog-1')).toHaveTextContent(expectedDateFormat);
});
