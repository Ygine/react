import React, {useState} from 'react';

const FormEditor = ({onSubmitForm}) => {
  const [todoText, setTodoText] = useState('');

  const onChange = (e) =>{
    setTodoText(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    onSubmitForm(todoText);
    setTodoText('');
  };

  return(
    <div>
      <form onSubmit={handleSubmitForm}>
        <input onChange={onChange} value={todoText} type="text"/>
        <button type='submit'>add todo</button>
      </form>
    </div>
    )
};


export default FormEditor;