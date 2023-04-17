import React from 'react';
import DefaultButton from 'components/base/DefaultButton/DefaultButton.js';
import DefaultCard from 'components/base/DefaultCard/DefaultCard.js';
import FormApp from 'components/App/FormApp/FormApp.js';
import SimpleForm from 'components/SimpleForm/SimpleForm.js';
import 'components/App/App.scss';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      isDisbledButton: false,
      posts: [
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
          description: 'Some description.  Some description. Some description.',
        },
      ],
    }
    this.buttonAction = this.buttonAction.bind(this);
  }

  buttonAction ($event) {
    this.setState({
      isDisbledButton: true,
    })
    setTimeout(() => {
      this.setState({ isDisbledButton: false })
    }, 2000);
  }

  render () {
    return (
        <div className="app">
            <FormApp /> 

            <SimpleForm />  

            <div className="flex-column flex-gap-8">
                <p className="text_l text_weight_head">
                    Вывод обычного списка
                </p>
                <div className="app__list">
                    {this.state.posts.map(p =>
                        <DefaultCard
                            post={p}
                            key={p.title}
                        />
                    )}
                </div> 
            </div>

            <div className="flex-column flex-gap-8">
                <p className="text_l text_weight_head">
                    Текст кнопки
                </p>
                <DefaultButton
                  title="Some title"
                  icon="bx-user"
                  isDisabled={this.state.isDisbledButton}
                  action={this.buttonAction}
                />
            </div>
        </div>
    )
  }
};
