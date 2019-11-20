import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import {contextCreated} from './context';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 200px;
  padding: 16px;
  background-color: #fff;
`;

const Modal = ({ onClose }) => {
  const backdrop = useRef(null);
  const context = useContext(contextCreated);

  const handleKeyPress = (e) =>{
    if (e.code !== 'Escape'){
      return
    }

    onClose()
  } ;

  const backdropClick = (e) =>{
    if(e.target === backdrop.current){
      onClose()
    }
  };

  useEffect(() => {
   window.addEventListener('keydown', handleKeyPress);

   //если модалка перерендривается то перед тем как useEffect вызоветс снова,
   // вызывается фун. return
   // при [] return вызовется когда компонент будет удалятся

    return () => {
     window.removeEventListener('keydown', handleKeyPress);
   }
  });

  return (
    <Backdrop ref={backdrop} onClick={backdropClick}>
      <Content>
        <h1>{context.text}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad animi
          officia consectetur sequi quia recusandae aspernatur at, omnis
          asperiores perspiciatis corporis ducimus laboriosam facere fugiat
          velit quos sit rerum necessitatibus, saepe deleniti cupiditate vel
          iure. Placeat, nemo quis iusto itaque, quos ipsam tempora odit animi
          cupiditate reprehenderit, rem rerum magni asperiores corrupti
          necessitatibus dolorum quas.
        </p>
        <button onClick={onClose}>Close</button>
      </Content>
    </Backdrop>
  );
};

export default Modal;
