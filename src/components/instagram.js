import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

class Instagram extends Component {
    render() {
        return (
            <div>
                <a href={this.props.userlink}><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a>
            </div>
        );
    }
}

export default Instagram;