import React from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

const ModalExample = ({className, children, isOpena, onToggle}) => {


  return (
    <div>

      <Modal isOpen={isOpena} toggle={onToggle} className={className}>
        <ModalHeader toggle={onToggle}>Modal title</ModalHeader>
        <ModalBody>
                    {children}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;