import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  return (
    <>
      {children && (
        <>
          {createPortal(
            <div>{children}</div>,
            document.getElementById('overlay')
          )}
        </>
      )}
    </>
  );
};

export default Modal;
