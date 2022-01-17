import React, { useState } from "react";
// styles
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const [modal, setModal] = useState(true);
  
  const hideModalHandler = () => {
    setModal(false);
    props.hideModal(modal)
  }

  return ( 
    <div className={ styles.backdrop } onClick={ hideModalHandler }>
      <div className={ styles.modalContainer }>
        <header className={ styles.modalHeader }>Error Message</header>
        <div className={ styles.modalBody }>{ props.message }</div>
        <footer className={ styles.modalFooter }>
          <button onClick={ hideModalHandler }>Okay</button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorModal;