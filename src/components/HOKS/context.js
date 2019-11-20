import React, {useState, createContext} from 'react';

export const contextCreated = createContext();

export const ContextProvider = (props) => {
  const [text] = useState('some text from context');

  return (
    <contextCreated.Provider value={{text}}>
      {props.children}
    </contextCreated.Provider>
  )
};