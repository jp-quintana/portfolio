import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ children, className }) => {
  return (
    <AnimatePresence>
      {children && (
        <>
          {createPortal(
            <motion.div
              initial={{ bottom: `-100vh` }}
              animate={{ bottom: 0 }}
              exit={{ bottom: `-100vh` }}
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
