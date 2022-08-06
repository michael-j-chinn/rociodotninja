import React from 'react';
import PropTypes from 'prop-types';
import './EditorBar.css';
import EditorButton from '../EditorButton/EditorButton';

function EditorBar(props) {
  const { buttonOptions } = props;

  return (
    <div className='editor-bar' data-testid='editor-bar-container'>
      {buttonOptions.map((option) => (
        <EditorButton
          key={option.text}
          styles={option.styles}
          text={option.text}
          onClick={option.onClick}
        />
      ))}
    </div>
  );
}

EditorBar.propTypes = {
  buttonOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      styles: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
};

EditorBar.defaultProps = {
  buttonOptions: [],
};

export default EditorBar;
