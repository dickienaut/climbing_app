import React from 'react';
import '../App.css';
import Nav from './Nav';
import climbs from '../climbdata';
import ClimbContainer from './ClimbContainer';


class App extends React.Component {

  render() {

    return (
      <div className='App'>
        < Nav />
        < ClimbContainer climbs={climbs} />
        < Climb Details />
      </div>
    )
  }
}

export default App
