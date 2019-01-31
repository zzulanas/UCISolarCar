import React from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from 'react-pose'
//https://www.youtube.com/watch?v=BSbVB14riQI
//Watch this

const Box = posed.div({
  visible: { opacity: 1},
  hidden: { opacity: 0}
});

export default ({isVisible}) => (
  <Box pose ={isVisible ? 'visible' : 'hidden'}/>
)
