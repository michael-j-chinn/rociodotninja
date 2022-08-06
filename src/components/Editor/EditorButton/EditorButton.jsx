import React from 'react';
import PropTypes from 'prop-types';
import './EditorButton.css';

function EditorIcon(props) {
  const { styles, text, onClick } = props;
  return (
    <button
      type='button'
      className={`editor-icon ${styles}`}
      onClick={onClick}
      onKeyPress={onClick}
    >
      {text}
    </button>
  );
}

EditorIcon.propTypes = {
  styles: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

EditorIcon.defaultProps = {
  styles: '',
};

export default EditorIcon;
