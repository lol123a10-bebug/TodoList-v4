import { FC, MouseEvent } from "react";
import styled from "styled-components";

type PropsType = {
  onClose: Function;
};

const ModalWrapper: FC<PropsType> = (props) => {
  const { onClose } = props;

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <Modal>
      <Backdrop onClick={handleClose}></Backdrop>
      <ModalContent>{props.children}</ModalContent>
    </Modal>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1050;
`;

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ModalWrapper;
