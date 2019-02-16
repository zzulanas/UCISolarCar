import React, { Component } from 'react';

class TeamMember extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Test</h1>
                <figure class="image is-128x128">
                    <img class="is-rounded" src={this.props.imglink}/>
                </figure>
            </div>
        );
    }
}

export default TeamMember;
