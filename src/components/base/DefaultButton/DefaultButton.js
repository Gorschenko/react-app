import React from 'react'
import PropTypes from 'prop-types'; 
import 'components/base/DefaultButton/DefaultButton.scss'

export default class DefaultButton extends React.Component {
    render() {
        return (
            <button
                className={`
                    default-button
                    default-button_${this.props.size}
                    default-button_${this.props.color}
                `}
                onClick={this.props.action}
            >
                {this.props.title}
            </button>
        )
    }
}

DefaultButton.propTypes = {
    action: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
}

DefaultButton.defaultProps = {
    size: 'm',
    color: 'primary',
}