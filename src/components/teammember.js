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
                <h1 className="title is-4 has-text-centered">{this.props.name}</h1>
                <h1 className="subtitle is-5 has-text-centered">{this.props.description}</h1>        
                <img className="is-rounded" src={this.props.imglink}/>
            </div>
        );
    }
}

export default TeamMember;
