import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ children, className }) => {
  return (
    <AnimatePresence>
      {children && (
        <>
          {createPortal(
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={className}
            >
              {children}
            </motion.div>,
            document.getElementById('overlay')
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
