import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';

import './animations.css'

const Title = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class BGTitle extends React.Component {
  state = { isVisible: true };

  render() {
    const { isVisible } = this.state;
    return (
    <Title className="bgtitle" pose={isVisible ? 'visible' : 'hidden'}><i>{this.props.name}</i></Title>
    );
  }
}

export default BGTitle;
