import React from "react";
import classes from "components/App/FormApp/FormApp.module.scss";
import SimpleInput from "components/base/inputs/SimpleInput/SimpleInput.js";
import DefaultButton from "components/base/DefaultButton/DefaultButton.js";

export default class FormApp extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        title: "",
        description: "",
      },
    };
    this.actions = {
      submit: this.submit.bind(this),
    };
  }
  render() {
    return (
      <div className="flex-column flex-gap-8">
        <p className="text_l text_weight_head">Обычная форма</p>
        <form className={classes.formApp}>
          <SimpleInput
            title="Название"
            name="name"
            query={this.state.formData.title}
            onChange={(newValue) =>
              this.setState({
                formData: { ...this.state.formData, title: newValue },
              })
            }
          />
          <SimpleInput
            title="Описание"
            name="description"
            query={this.state.formData.description}
            onChange={(newValue) =>
              this.setState({
                formData: { ...this.state.formData, description: newValue },
              })
            }
          />
          <DefaultButton title="Создать" action={this.actions.submit} />
        </form>
      </div>
    );
  }

  submit($event) {
    $event.preventDefault();
    console.log(this.state.formData);
    this.setState({ formData: { title: "", description: "" } });
  }
}
