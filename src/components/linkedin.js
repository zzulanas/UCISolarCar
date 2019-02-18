import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Linkedin extends Component {
    render() {
        return (
            <div>
                <a href={this.props.userlink}><FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon></a>
            </div>
        );
    }
}

export default Linkedin;
