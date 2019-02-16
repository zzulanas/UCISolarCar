import React, { Component } from 'react';

const customAvatarStyle = {
    width: '20%',
}
class TeamMember extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card">
                <h1 className="has-text-centered">Test</h1>
                <figure className="image is-128x128 card-image" style={customAvatarStyle}>
                    <img className="is-rounded" src={this.props.imglink}/>
                </figure>
            </div>
        );
    }
}

export default TeamMember;
