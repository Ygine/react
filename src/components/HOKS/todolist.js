import React from 'react';

const Todolist = ({items, deleteTodo}) => {

  return(
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>{item.text}<button onClick={ () => deleteTodo(item.id)}>delete</button></p>
        </li>
      ))}
    </ul>
  )

};


export default Todolist;