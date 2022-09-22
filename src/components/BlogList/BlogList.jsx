import React from 'react';
import PropTypes from 'prop-types';
import Blog from '../Blog/Blog';
import './BlogList.css';

function BlogList(props) {
  const { blogs } = props;
  return (
    <div className='blog-list' data-testid='blog-list'>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          id={blog.id}
          title={blog.title}
          createdDate={blog.createdDate}
          content={blog.content}
        />
      ))}
    </div>
  );
}

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      createdDate: PropTypes.instanceOf(Date).isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

BlogList.defaultProps = {
  blogs: [],
};

export default BlogList;
