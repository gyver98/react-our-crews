import React, { Component } from 'react';
import classNames from 'classnames';


class CrewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipCard: false
    }
    this._addFlipClass = this._addFlipClass.bind(this);
    this._removeFlipClass = this._removeFlipClass.bind(this);
  }
  /* Using classnames library
   Replacement Jquery hover handling code below
   $('.profile-hover').hover(function(){
        $(this).addClass('flip');
      },function(){
        $(this).removeClass('flip');
      });
  */
  _addFlipClass() {
    this.setState({
      flipCard: true
    })
  }

  _removeFlipClass() {
    this.setState({
      flipCard: false
    })
  }

  render() {
    return ([
        <div className={`box crew-photo i${this.props.id}`} data-track={this.props.location}>
          <img src={require(`../img/asset ${this.props.id + 1}.jpeg`)} alt="" />
        </div>,
        <div 
          onMouseEnter={this._addFlipClass} 
          onMouseLeave={this._removeFlipClass}
          className={classNames(`box profile-hover c${this.props.id}`, {"flip": this.state.flipCard})} data-track={this.props.location}>
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