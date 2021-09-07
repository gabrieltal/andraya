import React, { Component } from 'react';
import Timeline from './Timeline';
import Splash from './Splash';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { showTimeline: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showTimeline: true
    }));
  }

  render() {
    const timeline = <Timeline />;
    const splash = <Splash handleClick={this.handleClick}/>;

    return (
      <div>
        {this.state.showTimeline === true ? timeline : splash}
      </div>
    );
  }
}
