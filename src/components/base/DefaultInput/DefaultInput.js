import PropType from 'prop-types';
import 'components/base/DefaultInput/DefaultInput.scss';

const DefaultInput = (props) => {
    const title = props.title ? <p>{props.title}</p> : null;
    const inputClasses = `
        simple-input
        simple-input_${props.size}
    `;
    const error = props.errors[props.name]
        ? <p>{props.errors[props.name].message }</p>
        : null;
    return (
        <div className={inputClasses}>
            {title}
            <input
                type={props.type}
                { ...props.register(props.name) }
            />
            {error}
        </div>
    )
};

DefaultInput.propTypes = {
    name: PropType.string.isRequired,
    errors: PropType.object.isRequired,
    register: PropType.func.isRequired,
    title: PropType.string,
    type: PropType.string,
}

DefaultInput.defaultProps = {
    type: 'text',
    size: 'l',
}

export default DefaultInput;