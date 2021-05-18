import React from 'react';
import {
    CButton,
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
} from "@coreui/react";

const Modal = ({ show, toggle, body, btnText, headerText }) => {
    return (
        <>
            <CModal
                show={show}
                onClose={toggle}
            >
                <CModalHeader closeButton>{headerText}</CModalHeader>
                <CModalBody>
                    {body}
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary">{btnText}</CButton>{' '}
                    <CButton
                        color="secondary"
                        onClick={toggle}
                    >Cancel</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default Modal;
