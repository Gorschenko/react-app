import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DefaultInput from 'components/base/inputs/DefaultInput/DefaultInput.js';
import DefaultButton from 'components/base/DefaultButton/DefaultButton.js';

const SimpleForm = () => {
    const schema = yup.object({
        test: yup.string().required(),
        email: yup.string().email().required(),
    }).required();

    const { register, handleSubmit, formState:{ errors }, reset } = useForm(
        { resolver: yupResolver(schema) }
    );
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
        <div className="flex-column flex-gap-8">
            <p className="text_l text_weight_head">
                Форма с валидацией
            </p>
            <form
                className="flex-column flex-gap-8"
                onSubmit={handleSubmit(onSubmit)}
            >
                <DefaultInput
                    title="Test filed"
                    name="test"
                    register={register}
                    errors={errors}
                    isInlined={true}
                    additionalClasses="flex-gap-16"
                />
                <DefaultInput
                    title="Email filed"
                    name="email"
                    register={register}
                    errors={errors}
                />
                <DefaultButton title="Submit" />
            </form>
        </div>
    );
}

export default SimpleForm;