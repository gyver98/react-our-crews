import React, { Component } from 'react';
import './App.css';
import CrewCard from './components/CrewCard';
import FilterCrews from './components/FilterCrews';

const crews = [
  { 
    id: 1, 
    name: "Sujan Kim",
    title: "Frontend Development Specialist",
    location: "melbourne"
  },
  { 
    id: 2, 
    name: "Harry Potter",
    title: "Frontend Development Specialist",
    location: "sydney"
  },
  { 
    id: 3, 
    name: "Nick Nolan",
    title: "Frontend Development Specialist",
    location: "melbourne"
  },
  { 
    id: 4, 
    name: "Katy Ferry",
    title: "Frontend Development Specialist",
    location: "sydney"
  }
];
  

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterActive: ''
    }
    this._setFilterActive = this._setFilterActive.bind(this);
  }

  _setFilterActive = ( filter ) => {
    console.log('filter : '+ filter);
    this.setState({ filterActive: filter })
  }

  render() {
    return (
      <div className="contents">
        <h2 className="pagetitle">
          AI FED crews
        </h2>
        <main>
          <FilterCrews setFilterActive={this._setFilterActive}/>
          <section className="grid-container" data-filteractive={this.state.filterActive}>
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
