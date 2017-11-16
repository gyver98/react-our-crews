import React, { Component } from 'react';
import './App.css';
import CrewCard from './components/CrewCard';

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
          <section data-filteractive>
            <CrewCard />
          </section>
        </main>
      </div>    
    );
  }
}

export default App;
