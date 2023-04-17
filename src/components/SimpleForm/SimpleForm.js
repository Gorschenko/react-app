import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DefaultInput from 'components/base/DefaultInput/DefaultInput.js';
// import DefaultButton from 'components/base/DefaultButton/DefaultButton.js';

const SimpleForm = () => {
    const schema = yup.object({
        test: yup.string().required(),
        email: yup.string().email().required(),
    }).required();

    const { register, handleSubmit, formState:{ errors } } = useForm(
        { resolver: yupResolver(schema) }
    );
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <DefaultInput
                title="Test filed"
                name="test"
                register={register}
                errors={errors}
            />
            <DefaultInput
                title="Email filed"
                name="email"
                register={register}
                errors={errors}
            />
            <button>Submit</button>
        </form>
    );
}

export default SimpleForm;