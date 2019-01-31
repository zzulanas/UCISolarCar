import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';

import './animations.css'

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class Example extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return (
    <Box className="title" pose={isVisible ? 'visible' : 'hidden'}>{this.props.name}</Box>
    );
  }
}

export default Example;
