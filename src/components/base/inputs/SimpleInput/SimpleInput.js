import React from 'react';
import PropType from 'prop-types';
import 'components/base/inputs/baseInputs.scss';

export default class SimpleInput extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '',
        };
        this.actions = {
            onChange: this.onChange.bind(this)
        }
    }

    componentDidMount() {
        if (this.props.query !== this.state.query) {
            this.setState({ query: this.props.query });
        };
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.query !== this.state.query) {
            this.setState({ query: this.props.query });
        };
    }

    onChange ($event) {
        this.setState({ query: $event.target.value });
        this.props.onChange($event.target.value);
    }

    render() {
        const title = this.props.title &&
            <label
                htmlFor={this.props.name}
                className="display-block"
            >
                {this.props.title}
            </label>

        const inputClasses = `
            default-input
            default-input_${this.props.isInlined ? 'inlined' : 'blocked'}
            default-input_${this.props.size}
            ${this.props.additionalClasses ? this.props.additionalClasses : ''}
        `;
        
        return (
            <div className={inputClasses}>
                {title}
                <input
                    id={this.props.name}
                    type={this.props.type}
                    value={this.state.query}
                    onChange={this.actions.onChange}
                />
            </div>
        )
    }
}

SimpleInput.propTypes = {
    query: PropType.string.isRequired,
    onChange: PropType.func.isRequired,
    name: PropType.string.isRequired,
    title: PropType.string,
    type: PropType.string,
    isInlined: PropType.bool,
    additionalClasses: PropType.string,
}

SimpleInput.defaultProps = {
    type: 'text',
    isInlined: false,
    size: 'l',
}