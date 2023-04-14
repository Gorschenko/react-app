import React from 'react';
import PropType from 'prop-types';
import 'components/base/SimpleInput/SimpleInput.scss';

export default class SimpleInput extends React.Component {
    render() {
        const title = this.props.title ? <p>{this.props.title}</p> : null;
        const inputClasses = `
            simple-input
            simple-input_${this.props.size}
        `
        return (
            <div className={inputClasses}>
                {title}
                <input
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

SimpleInput.propTypes = {
    value: PropType.string.isRequired,
    onChange: PropType.func.isRequired,
    type: PropType.string,
}

SimpleInput.defaultProps = {
    type: 'text',
    size: 'l',
}