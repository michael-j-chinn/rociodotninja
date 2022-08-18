import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import './EditableArea.css';

function EditableArea(props) {
  const { content } = props;
  const inputReference = useRef(null);
  const parsedContent = parser(content);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return (
    <div
      role='textbox'
      className='editable-area z-depth-2'
      ref={inputReference}
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
