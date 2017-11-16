import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="contents">
        <h2 className="pagetitle">
          AI FED crews
        </h2>
        <main>
          <ul className="filter-member">
            <li><button className="filter-member__option active" data-filtermember>All</button></li>
            <li><button className="filter-member__option" data-filtermember="melbourne-active">Melbourne</button></li>
            <li><button className="filter-member__option" data-filtermember="sydney-active">Sydney</button></li>
          </ul>
          <section className="grid-container" data-filteractive>
            <div className="box crew-photo i1" data-track="melbourne">
              <img src={require('./img/luke.peary.jpg')} alt="" />
            </div>
            <div className="box profile-hover c1" data-track="melbourne">
              <div className="crew-profile front">
                <h1 className="crew-profile__name">Luke Peary</h1>
                <span className="crew-profile__title">Front End Development Specialist</span>
                <p className="crew-profile__area">Melbourne</p>
              </div>
              <div className="crew-profile back">
                <h1 className="crew-profile__name">Guess who?</h1>
              </div>
            </div>
          </section>
        </main>
      </div>    
    );
  }
}

export default App;
