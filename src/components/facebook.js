import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

class Facebook extends Component {
    render() {
        return (
            <div>
                <a href={this.props.userlink}><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a>
            </div>
        );
    }
}

export default Facebook;
