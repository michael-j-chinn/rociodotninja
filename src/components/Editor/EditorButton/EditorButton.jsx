import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mui/material/Icon';
import './EditorButton.css';

function EditorButton(props) {
  const { icon, onClick } = props;
  return (
    <div
      role='button'
      tabIndex={0}
      className='editor-button'
      onClick={onClick}
      onKeyPress={onClick}
    >
      <Icon>{icon}</Icon>
    </div>
  );
}

EditorButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EditorButton;
