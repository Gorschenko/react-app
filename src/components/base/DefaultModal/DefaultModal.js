import React from "react";
import PropType from "prop-types";
import { createPortal } from "react-dom";
import DefaultButton from "components/base/DefaultButton/DefaultButton.js";
import "components/base/DefaultModal/DefaultModal.scss";

const DefaultModal = ({ children, ...props }) => {
    const nodeForModal = document.getElementById("portal");

    return (
        props.show &&
        createPortal(
            <div className="default-modal" onClick={props.onClose}>
                <div
                    className="flex flex-gap-8"
                    // отмена погружения, чтобы модалка не закрывалась
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="default-modal__inner">{children}</div>
                    <DefaultButton
                        className="default-modal__button"
                        icon="bx-x"
                        form="rounded"
                        action={props.onClose}
                    />
                </div>
            </div>,
            nodeForModal
        )
    );
};

DefaultModal.propTypes = {
    show: PropType.bool.isRequired,
};

export default DefaultModal;
