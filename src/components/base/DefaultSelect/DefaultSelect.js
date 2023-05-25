import "components/base/DefaultSelect/DefaultSelect.scss";
import PropType from "prop-types";
import React, { useState } from "react";

const DefaultSelect = (props) => {
    const [show, setShow] = useState(false);
    const [query, setQuery] = useState("");

    const selectClasses = [
        "default-select",
        `default-select_${props.isInlined ? "inlined" : "blocked"}`,
        `default-select_${props.size}`,
        `${props.additionalClasses ? props.additionalClasses : ""}`,
    ].join(" ");

    const iconClasses = ["bx", `bx-chevron-${show ? "up" : "down"}`].join(" ");

    const listClasses = [
        "default-select__list",
        `default-select__list_${show ? "active" : "inactive"}`,
    ].join(" ");

    const error = props.errors[props.name] && (
        <p className="text_xs color_danger">
            {props.errors[props.name].message}
        </p>
    );

    const title = props.title && (
        <label htmlFor={props.name} className="display-block text_xs">
            {props.title}
        </label>
    );

    const toggleList = (e) => {
        setShow(!show);
    };

    const selectItem = (item) => {
        setQuery(item[props.schema]);
    };

    const items = props.items.length ? (
        props.items.map((i) => (
            <li
                className="default-select__list-item"
                key={i[props.schema]}
                onClick={(e) => selectItem(i)}
            >
                {i[props.schema]}
            </li>
        ))
    ) : (
        <li className="default-select__list-item">Информация отсутствует</li>
    );

    return (
        <div>
            <div className={selectClasses}>
                {title}
                <div className="default-select__inner">
                    <div className="default-select__field">
                        <input
                            className="flex-1 cursor-pointer"
                            id={props.name}
                            name={props.name}
                            readOnly
                            placeholder={props.placeholder}
                            value={query}
                            {...props.register(props.name)}
                            onClick={toggleList}
                        />
                        <i className={iconClasses} />
                    </div>
                    <ul className={listClasses}>{items}</ul>
                </div>
            </div>
            {error}
        </div>
    );
};

DefaultSelect.propTypes = {
    errors: PropType.object.isRequired,
    register: PropType.func.isRequired,
    items: PropType.array.isRequired,
    schema: PropType.string.isRequired,
    name: PropType.string.isRequired,
    title: PropType.string,
    placeholder: PropType.string,
    isInlined: PropType.bool,
    additionalClasses: PropType.string,
};

DefaultSelect.defaultProps = {
    isInlined: false,
    size: "l",
};

export default DefaultSelect;
