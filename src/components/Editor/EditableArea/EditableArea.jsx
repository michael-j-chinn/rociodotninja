import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import './EditableArea.css';

function EditableArea(props) {
  const { content } = props;
  const parsedContent = parser(content);
  return (
    <div
      role='textbox'
      className='editable-area'
      data-testid='editable-area'
      contentEditable
      suppressContentEditableWarning
    >
      {parsedContent}
    </div>
  );
}

EditableArea.propTypes = {
  content: PropTypes.string,
};

EditableArea.defaultProps = {
  content: '',
};

export default EditableArea;
