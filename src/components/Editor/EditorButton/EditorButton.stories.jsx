import React from 'react';
import EditorButton from './EditorButton';

export default {
  title: 'Editor/EditorButton',
  component: EditorButton,
};

export function Default() {
  return <EditorButton icon='account_circle' />;
}

export function Bold() {
  return <EditorButton icon='format_bold' />;
}

export function Italic() {
  return <EditorButton icon='format_italic' />;
}

export function Underline() {
  return <EditorButton icon='format_underlined' />;
}

export function Clickable() {
  return (
    <EditorButton icon='record_voice_over' onClick={() => alert('pong')} />
  );
}
