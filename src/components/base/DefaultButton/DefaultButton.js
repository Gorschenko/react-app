import React from 'react'
import PropTypes from 'prop-types'; 
import 'components/base/DefaultButton/DefaultButton.scss'

export default class DefaultButton extends React.Component {

    render() {
        const title = this.props.title ? <span>{this.props.title}</span> : null;
        const icon = this.props.icon ? <i className={`bx ${this.props.icon}`} /> : null;
        const buttonClasses = `
            default-button
            default-button_${this.props.size}
            default-button_${this.props.color}
            ${this.props.form ? 'default-button_' + this.props.form : ''}
            ${this.props.hasRightIcon ? 'default-button_mirrored' : ''}
            ${this.props.withoutPaddings ? 'default-button_resetted' : ''}
        `;

        return (
            <button
                className={buttonClasses}
                disabled={this.props.isDisabled}
                onClick={this.props.action}
            >
                {icon}
                {title}
            </button>
        )
    }
}

DefaultButton.propTypes = {
    action: PropTypes.func.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.string,
    form: PropTypes.string,
    color: PropTypes.string,
    hasRightIcon: PropTypes.bool,
    hasPaddings: PropTypes.bool,
    isDisabled: PropTypes.bool,
}

DefaultButton.defaultProps = {
    size: 'l',
    color: 'primary',
}