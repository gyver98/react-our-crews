import React, { Component } from 'react';
import './App.css';
import CrewCard from './components/CrewCard';

const crewDetails = [
  { 
    id: 1, 
    name: "Sujan Kim",
    title: "Frontend Development Specialist",
    location: "Melbourne"
  },
  { 
    id: 2, 
    name: "Harry Potter",
    title: "Frontend Development Specialist",
    location: "Melbourne"
  }
];
  

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
            <CrewCard 
              name={crewDetails[0].name} 
              title={crewDetails[0].title} 
              location={crewDetails[0].location} />
          </section>
        </main>
      </div>    
    );
  }
}

export default App;
