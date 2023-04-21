import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DefaultInput from 'components/base/inputs/DefaultInput/DefaultInput.js';
import DefaultButton from 'components/base/DefaultButton/DefaultButton.js';
import DefaultDropdown from 'components/base/DefaultDropdown/DefaultDropdown.js';
import DefaultSelect from 'components/base/DefaultSelect/DefaultSelect.js';
import React, { useState } from 'react';

const SimpleForm = () => {
    const [posts, setPosts] = useState([
        {
         title: 'Some title 1',
         description: 'Some description. Some description. Some description. Some description.',
        },
        {
            title: 'Some title 2',
            description: 'Some description.',
        },
        {
            title: 'Some title 3',
            description: 'Text Text Text Text ',
        },
        {
            title: 'Some title 4',
            description: 'Test Test Test Test ',
        },
        {
            title: 'Some title 5',
            description: 'Only description. Only description.',
        },
        {
            title: 'Some title 123',
            description: '123',
        },
        {
            title: '22222',
            description: '22 222 333',
        },
        {
            title: 'авывавваывавы',
            description: 'ываыв вааввыа аввы',
        },
    ]);

    const schema = yup.object({
        test: yup.string().required(),
        email: yup.string().email().required(),
        city: yup.string().required(),
    }).required();

    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        { resolver: yupResolver(schema) }
    );

    const onSubmit = data => {
        console.log(data);
        const newPost = {
            title: data.test,
            description: data.email,
        }
        setPosts([...posts, newPost]);
        reset();
    };

    const selectDropdown = (data) => {
        console.log(data);
    }
    return (
        <div className="flex-column flex-gap-8">
            <p className="text_l text_weight_head">
                Форма с валидацией
            </p>
            <DefaultDropdown
                items={posts}
                schema="title"
                onSelect={selectDropdown}
            >
                <DefaultButton title="Button" />
            </DefaultDropdown>
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
                <DefaultSelect
                    title="Select"
                    name="city"
                    placeholder="Выберите город"
                    items={posts}
                    schema="description"
                    register={register}
                    errors={errors}
                />
                <DefaultButton title="Submit" />
            </form>
        </div>
    );
}

export default SimpleForm;