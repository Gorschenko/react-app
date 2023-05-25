import React, { useState, useRef, useEffect } from "react";
import PropType from "prop-types";
import "components/base/DefaultDropdown/DefaultDropdown.scss";

const DefaultDropdown = ({ children, ...props }) => {
    const [show, setShow] = useState();
    const dropdownRef = useRef();

    const dropdownClasses = [
        "default-dropdown",
        `${props.additionalClasses ? props.additionalClasses : ""}`
    ].join(" ");

    const listClasses = [
        "default-dropdown__list",
        `default-dropdown__list_${show ? "active" : "inactive"}`
    ].join(" ");

    const toggleList = (e) => {
        const newShow = dropdownRef.current.contains(e.target) ? true : false;
        setShow(newShow);
    };

    const selectItem = (e, item) => {
        e.stopPropagation();
        props.onSelect(item);
        setShow(false);
    };

    const items = props.items.length ? (
        props.items.map((i) => (
            <li
                className="default-dropdown__list-item"
                key={i[props.schema]}
                onClick={(e) => selectItem(e, i)}
            >
                {i[props.schema]}
            </li>
        ))
    ) : (
        <li className="default-dropdown__list-item">Информация отсутствует</li>
    );

    useEffect(() => {
        document.addEventListener("mousedown", toggleList);
        return () => document.removeEventListener("mousedown", toggleList);
    });

    return (
        <div
            ref={dropdownRef}
            className={dropdownClasses}
            // onClick={toggleList}
        >
            <div>{children}</div>
            <ul className={listClasses}>{items}</ul>
        </div>
    );
};

DefaultDropdown.propTypes = {
    items: PropType.array.isRequired,
    onSelect: PropType.func.isRequired,
    schema: PropType.string.isRequired,
    additionalClasses: PropType.string
};

DefaultDropdown.defaultProps = {
    isInlined: false,
    size: "l"
};

export default DefaultDropdown;
