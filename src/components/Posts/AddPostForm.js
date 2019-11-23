import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const AddPostForm = ({onCloser, onAddPost}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {title, text};
    onAddPost(data);
  };

  return (
    <form  onSubmit={handleSubmit}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="title"
        label="title"
        name="title"
        autoComplete="title"
        autoFocus
      />
      <TextField
        onChange={(e) => setText(e.target.value)}
        value={text}
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows="4"
        margin="normal"
        variant="outlined"
        style={{width: '100%'}}
      />

      <Button
        onClick={onCloser}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >Add Post
      </Button>
    </form>
  );
};

export default AddPostForm;