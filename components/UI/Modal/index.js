import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const modalElement = document.getElementById('modal');
  return (
    <>{children && <>{createPortal(<div>{children}</div>, modalElement)}</>}</>
  );
};

export default Modal;
