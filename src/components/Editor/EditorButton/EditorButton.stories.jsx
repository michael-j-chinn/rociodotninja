import React from 'react';
import EditorButton from './EditorButton';

export default {
  title: 'EditorButton',
  component: EditorButton,
};

export function Default() {
  return <EditorButton />;
}

export function Bold() {
  return <EditorButton text='B' styles='bold' />;
}

export function Italic() {
  return <EditorButton text='I' styles='italic' />;
}

export function Underline() {
  return <EditorButton text='U' styles='underline' />;
}

export function Clickable() {
  return <EditorButton text='Ping' onClick={() => alert('pong')} />;
}
