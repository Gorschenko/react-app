import React from 'react'
import DefaultButton from 'components/base/DefaultButton/DefaultButton.js'

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      isDisbledButton: false,
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
      <div>
        <DefaultButton
          title="Some title"
          icon="bx-user"
          isDisabled={this.state.isDisbledButton}
          action={this.buttonAction}
        />
      </div>
    )
  }
};
