import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return <Editor editorState={editorState} onEditorStateChange={setEditorState} />;
};

export default RichTextEditor;

