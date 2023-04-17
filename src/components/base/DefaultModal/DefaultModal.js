
import React from 'react';
import PropType from 'prop-types';
import { createPortal } from 'react-dom';
import 'components/base/DefaultModal/DefaultModal.scss';

const DefaultModal = ({ children, ...props }) => {
    const nodeForModal = document.getElementById('portal');

    return (
        props.show &&
        <div
        >
            {createPortal(<div className="default-modal" onClick={props.onClose}>{children}</div>, nodeForModal)}
        </div>
    );
};

DefaultModal.propTypes = {
    show: PropType.bool.isRequired,
};

export default DefaultModal;