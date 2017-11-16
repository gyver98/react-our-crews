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
    return ([
      <svg aria-hidden="true" style={{width:0, height:0, position: 'absolute', zIndex: -2}}>
      <defs>
        <filter color-interpolation-filters="sRGB" id="duotone">
          <feColorMatrix type="matrix" values="0.95 0 0 0 0.05 0.65 0 0 0 0.15 0.15 0 0 0 0.50 0 0 0 1 0"></feColorMatrix>
        </filter>
      </defs>
    </svg>,
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
    ]);
  }
}

export default App;
