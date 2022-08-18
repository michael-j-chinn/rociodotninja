import React from 'react';
import EditorBar from './EditorBar/EditorBar';
import EditableArea from './EditableArea/EditableArea';

const modifyText = (command, showUi = false, value = null) =>
  document.execCommand(command, showUi, value);

function Editor() {
  const buttonOptions = [
    { icon: 'format_bold', onClick: () => modifyText('bold') },
    { icon: 'format_italic', onClick: () => modifyText('italic') },
    { icon: 'format_underlined', onClick: () => modifyText('underline') },
  ];

  return (
    <div className='editor' data-testid='editor'>
      <EditorBar buttonOptions={buttonOptions} />
      <EditableArea />
    </div>
  );
}

export default Editor;
