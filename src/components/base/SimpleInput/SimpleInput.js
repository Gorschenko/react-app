import React from 'react';
import PropType from 'prop-types';
import 'components/base/SimpleInput/SimpleInput.scss';

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
        const title = this.props.title ? <p>{this.props.title}</p> : null;
        const inputClasses = `
            simple-input
            simple-input_${this.props.size}
        `;
        
        return (
            <div className={inputClasses}>
                {title}
                <input
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
    title: PropType.string,
    type: PropType.string,
}

SimpleInput.defaultProps = {
    type: 'text',
    size: 'l',
}