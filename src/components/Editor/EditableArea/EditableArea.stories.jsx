import React from 'react';
import EditableArea from './EditableArea';

export default {
  title: 'Editor/EditableArea',
  component: EditableArea,
};

export function Default() {
  return <EditableArea />;
}

export function WithPlainTextContent() {
  return <EditableArea content='Hello world!' />;
}

export function WithEditedContent() {
  return <EditableArea content='<div>Hello <strong>world!</strong></div>' />;
}
