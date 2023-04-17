import React from 'react';
// import PropType from 'prop-types';
import classes from 'components/App/FormApp/FormApp.module.scss';
import SimpleInput from 'components/base/SimpleInput/SimpleInput.js';
import DefaultButton from 'components/base/DefaultButton/DefaultButton.js';

export default class FormApp extends React.Component {
    constructor() {
        super();
        this.state = {
            formData: {
                title: '',
                description: '',
            },
        };
        this.actions = {
            submit: this.submit.bind(this),
        };
    }
    render() {
        return (
            <form className={classes.formApp}>
                <SimpleInput
                    title="Название"
                    query={this.state.formData.title}
                    onChange={newValue => this.setState({ formData: { ...this.state.formData, title: newValue } })}
                />
                <SimpleInput
                    title="Описание"
                    query={this.state.formData.description}
                    onChange={newValue => this.setState({ formData: { ...this.state.formData, description: newValue } })}
                />
                <DefaultButton
                  title="Создать"
                  action={this.actions.submit}
                />
            </form>
        )
    }

    submit($event) {
        $event.preventDefault();
        console.log(this.state.formData);
        this.setState({ formData: { title: '', description: '' } });
    }
}