import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Linkedin extends Component {
    render() {
        return (
            <div>
                <a href={"mailto: " + this.props.userlink}><FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon></a>
            </div>
        );
    }
}

export default Linkedin;