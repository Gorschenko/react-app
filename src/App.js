import React from 'react'
import DefaultButton from 'components/base/DefaultButton/DefaultButton.js'

export default class App extends React.Component {
  constructor () {
    super();
    this.buttonAction = this.buttonAction.bind(this);
  }

  buttonAction ($event) {
    console.log($event);
  }

  render () {
    return (
      <div>
        <DefaultButton
          title="Some title"
          icon="bx-user"
          action={this.buttonAction}
        />
      </div>
    )
  }
};
