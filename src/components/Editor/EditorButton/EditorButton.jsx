import React from 'react';
import PropTypes from 'prop-types';
import './EditorButton.css';

function EditorButton(props) {
  const { styles, text, onClick } = props;
  return (
    <button
      type='button'
      className={`editor-button ${styles}`}
      onClick={onClick}
      onKeyPress={onClick}
    >
      {text}
    </button>
  );
}

EditorButton.propTypes = {
  styles: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

EditorButton.defaultProps = {
  styles: '',
};

export default EditorButton;
