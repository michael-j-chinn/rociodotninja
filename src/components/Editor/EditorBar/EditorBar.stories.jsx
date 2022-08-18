import React from 'react';
import EditorBar from './EditorBar';

export default {
  title: 'Editor/EditorBar',
  component: EditorBar,
};

export function Default() {
  return <EditorBar />;
}

const mockOnClick = () => 1;
const buttonOptions = [
  { icon: 'accessibility', onClick: mockOnClick },
  { icon: 'backup', onClick: mockOnClick },
  { icon: 'camera_roll', onClick: mockOnClick },
  { icon: 'face', onClick: mockOnClick },
];

export function MultipleButtons() {
  return <EditorBar buttonOptions={buttonOptions} />;
}
