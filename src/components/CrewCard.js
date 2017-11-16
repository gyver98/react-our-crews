import React, { Component } from 'react';


class CrewCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ([
        <div className={`box crew-photo i${this.props.id}`} data-track="melbourne">
          <img src={require('../img/asset 2.jpeg')} alt="" />
        </div>,
        <div className={`box profile-hover c${this.props.id}`} data-track="melbourne">
          <div className="crew-profile front">
            <h1 className="crew-profile__name">{this.props.name}</h1>
            <span className="crew-profile__title">{this.props.title}</span>
            <p className="crew-profile__area">{this.props.location}</p>
          </div>
          <div className="crew-profile back">
            <h1 className="crew-profile__name">Guess who?</h1>
          </div>
        </div>
    ])
  }
}

export default CrewCard;