import React from 'react'
import DefaultButton from 'components/base/DefaultButton/DefaultButton.js'

export default class App extends React.Component {
  constructor () {
    super();
    this.constructor.displayName = 'App';
    this.buttonAction = this.buttonAction.bind(this);
  }

  buttonAction (data) {
    console.log(data);
  }

  render () {
    return (
      <div>
        <DefaultButton
          title="Some title"
          action={this.buttonAction}
        />
      </div>
    )
  }
};
