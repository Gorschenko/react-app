import 'components/base/DefaultSelect/DefaultSelect.scss';
import PropType from 'prop-types';
import React, { useState } from 'react';

const DefaultSelect = (props) => {
    const [show, setShow] = useState(false);

    const selectClasses = [
        'default-select',
        `default-select_${props.isInlined ? 'inlined' : 'blocked'}`,
        `default-select_${props.size}`,
        `${props.additionalClasses ? props.additionalClasses : ''}`,
    ].join(' ');

    const iconClasses = [
        'bx',
        `bx-chevron-${show ? 'up' : 'down'}`,
    ].join(' ');

    const listClasses = [
        'default-select__list',
        `default-select__list_${show ? 'active' : 'inactive'}`,
    ].join(' ');

    const error = props.errors[props.name] &&
        <p className="text_xs color_danger">{props.errors[props.name].message }</p>;

    const title = props.title &&
        <label
            htmlFor={props.name}
            className="display-block text_xs"
        >
            {props.title}
        </label>;

    const toggleList = (e) => {
        setShow(!show);
    };

    return (
        <div>
            <div className={selectClasses}>
                {title}
                <div className="default-select__inner">
                    <div className="default-select__field">
                        <input
                            className="flex-1"
                            id={props.name}
                            readOnly
                            type={props.type}
                            placeholder={props.placeholder}
                            { ...props.register(props.name) }
                            onFocus={toggleList}
                            onBlur={toggleList}
                        />
                        <i className={iconClasses} />
                    </div>
                    <ul className={listClasses}>
                        <li className="default-select__list-item">
                            Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 
                        </li>
                        <li className="default-select__list-item">
                            Item 1
                        </li>
                        <li className="default-select__list-item">
                            Item 1
                        </li>
                        <li className="default-select__list-item">
                            Item 1
                        </li>
                        <li className="default-select__list-item">
                            Item 1
                        </li>
                        <li className="default-select__list-item">
                            Item 1
                        </li>
                        <li className="default-select__list-item">
                            Item 1
                        </li>
                    </ul>
                </div>
            </div>
            {error}
        </div>  
    )
};

DefaultSelect.propTypes = {
    errors: PropType.object.isRequired,
    register: PropType.func.isRequired,
    name: PropType.string.isRequired,
    title: PropType.string,
    type: PropType.string,
    placeholder: PropType.string,
    isInlined: PropType.bool,
    additionalClasses: PropType.string,
}

DefaultSelect.defaultProps = {
    type: 'text',
    isInlined: false,
    size: 'l',
}

export default DefaultSelect;