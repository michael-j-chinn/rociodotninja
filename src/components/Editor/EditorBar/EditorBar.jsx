import React from 'react';
import PropTypes from 'prop-types';
import './EditorBar.css';
import EditorButton from '../EditorButton/EditorButton';

function EditorBar(props) {
  const { buttonOptions } = props;

  return (
    <div role='toolbar' className='editor-bar z-depth-2'>
      {buttonOptions.map((option) => (
        <EditorButton
          key={option.icon}
          icon={option.icon}
          onClick={option.onClick}
        />
      ))}
    </div>
  );
}

EditorBar.propTypes = {
  buttonOptions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
};

EditorBar.defaultProps = {
  buttonOptions: [],
};

export default EditorBar;
