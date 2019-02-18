import React, { Component } from 'react'
import Linkedin from './linkedin'
import Email from './email'
import Instagram from './instagram'
import { Link } from 'gatsby'

const customAvatarStyle = {
  width: '20%',
}
const iconAligntStyle = {
  width: '100%',
}

class TeamMember extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="card">
        <img className="is-rounded" src={this.props.imglink} />
        <h1 className="title is-4 has-text-centered">{this.props.name}</h1>
        <h1 className="subtitle is-5 has-text-centered">
          {this.props.description}
        </h1>
        <h2 className="subtitle is-6 has-text-centered">{this.props.blurb == null ? null: "\"" + this.props.blurb +"\""}</h2>
        <div className="card-footer">
          {this.props.userlink != null ? (
            <span className="card-footer-item">
              <Linkedin userlink={this.props.userlink} />
            </span>
          ) : null}
          {this.props.userig != null ? (
            <span className="card-footer-item">
              <Instagram
                className="card-footer-item"
                userlink={this.props.userig}
              />
            </span>
          ) : null}
          <span className="card-footer-item">
            <Email
              className="card-footer-item"
              userlink={this.props.useremail}
            />
          </span>
        </div>
      </div>
    )
  }
}

export default TeamMember
