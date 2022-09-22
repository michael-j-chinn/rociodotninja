import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogList from './BlogList';

test('renders blog list', () => {
  render(
    <BlogList
      blogs={[
        {
          id: 1,
          title: 'title',
          content: 'content',
          createdDate: new Date(1985, 5, 1),
        },
      ]}
    />
  );
  const blogList = screen.getByTestId('blog-list');
  expect(blogList).toBeInTheDocument();
  expect(blogList).toContainElement(screen.getByTestId('blog-1'));
});
