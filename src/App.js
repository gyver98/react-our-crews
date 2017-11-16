import React, { Component } from 'react';
import './App.css';
import CrewCard from './components/CrewCard';

const crews = [
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
  },
  { 
    id: 3, 
    name: "Nick Nolan",
    title: "Frontend Development Specialist",
    location: "Melbourne"
  },
  { 
    id: 4, 
    name: "Katy Ferry",
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
          <section className="grid-container" data-filteractive>
            {crews.map(crew => {
              return <CrewCard
                  id={crew.id} 
                  name={crew.name} 
                  title={crew.title} 
                  location={crew.location} />
            })}
            
          </section>
        </main>
      </div>    
    );
  }
}

export default App;
