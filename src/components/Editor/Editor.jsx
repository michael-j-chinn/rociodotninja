import React from 'react';
import EditorBar from './EditorBar/EditorBar';
import EditableArea from './EditableArea/EditableArea';

const modifyText = (command, showUi = false, value = null) =>
  document.execCommand(command, showUi, value);

function Editor() {
  const buttonOptions = [
    { text: 'B', styles: 'bold', onClick: () => modifyText('bold') },
    { text: 'I', styles: 'italic', onClick: () => modifyText('italic') },
    { text: 'U', styles: 'underline', onClick: () => modifyText('underline') },
  ];

  return (
    <div className='editor' data-testid='editor'>
      <EditorBar buttonOptions={buttonOptions} />
      <EditableArea />
    </div>
  );
}

export default Editor;
