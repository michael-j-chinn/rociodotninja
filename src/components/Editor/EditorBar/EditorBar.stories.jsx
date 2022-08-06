import React from 'react';
import EditorBar from './EditorBar';

export default {
  title: 'Editor/EditorBar',
  component: EditorBar,
};

export function Default() {
  return <EditorBar buttons={[]} />;
}

const buttonOptions = [
  { text: 'foo' },
  { text: 'bar' },
  { text: 'zoo' },
  { text: 'jar' },
];

export function MultipleButtons() {
  return <EditorBar buttonOptions={buttonOptions} />;
}
