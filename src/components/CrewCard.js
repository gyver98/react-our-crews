import React from 'react';

const CrewCard = () => {
  return (
    <div className="grid-container">
      <div className="box crew-photo i1" data-track="melbourne">
        <img src={require('../img/asset 2.jpeg')} alt="" />
      </div>
      <div className="box profile-hover c1" data-track="melbourne">
        <div className="crew-profile front">
          <h1 className="crew-profile__name">Sujan Kim</h1>
          <span className="crew-profile__title">Front End Development Specialist</span>
          <p className="crew-profile__area">Melbourne</p>
        </div>
        <div className="crew-profile back">
          <h1 className="crew-profile__name">Guess who?</h1>
        </div>
      </div>
    </div>
  )

}

export default CrewCard;