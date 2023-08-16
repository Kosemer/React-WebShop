import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideCartHandler}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
      {ReactDOM.createPortal(<Backdrop hideCartHandler={props.hideCartHandler} />, portalElements)}
    </Fragment>
  );
}

export default Modal;
