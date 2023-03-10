import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
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
      {ReactDOM.createPortal(<Backdrop></Backdrop>, portalElements)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
    </Fragment>
  );
}

export default Modal;
