import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays')
// index.html => id.overlays
const Modal = (props) => {
    return <Fragment>
        {/* <Backdrop/>
        <ModalOverlay>{props.children}</ModalOverlay> */}
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement) }
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
     portalElement
        )}
    </Fragment>
}

//props.children을 두 번 사용 이유 : 부모(Modal)에서 자식(ModalOverlay)으로 데이터를 전달하기 위함

export default Modal;