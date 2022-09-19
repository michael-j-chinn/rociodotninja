import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import parser from 'html-react-parser';
import './Blog.css';

function Blog(props) {
  const { id, title, createdDate, content } = props;
  const parsedContent = parser(content);
  return (
    <Card className='blog' data-testid={`blog-${id}`}>
      <CardHeader title={title} subheader={createdDate.toDateString()} />
      <CardContent>{parsedContent}</CardContent>
    </Card>
  );
}

Blog.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.string.isRequired,
};

export default Blog;
