import PropType from 'prop-types';
import 'components/base/inputs/baseInputs.scss';

const DefaultInput = (props) => {
    const title = props.title
        ? 
        <label
            htmlFor={props.name}
            className="display-block"
        >
            {props.title}
        </label>
        : null;
    
    const inputClasses = `
        default-input
        default-input_${props.isInlined ? 'inlined' : 'blocked'}
        default-input_${props.size}
        ${props.additionalClasses ? props.additionalClasses : ''}
    `;

    const error = props.errors[props.name]
        ? <p className="text_xs color_danger">{props.errors[props.name].message }</p>
        : null;
    
    return (
        <div>
            <div className={inputClasses}>
                {title}
                <input
                    id={props.name}
                    type={props.type}
                    { ...props.register(props.name) }
                />
            </div>
            {error}
        </div>  
    )
};

DefaultInput.propTypes = {
    errors: PropType.object.isRequired,
    register: PropType.func.isRequired,
    name: PropType.string.isRequired,
    title: PropType.string,
    type: PropType.string,
    isInlined: PropType.bool,
    additionalClasses: PropType.string,
}

DefaultInput.defaultProps = {
    type: 'text',
    isInlined: false,
    size: 'l',
}

export default DefaultInput;