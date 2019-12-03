import React from 'react';
import ClimbCard from './ClimbCard'



class ClimbContainer extends React.Component {

  state = {
      climbs: this.props.climbs
  }

  render() {

    const climbs = this.state.climbs.map((climb) => <div> <ClimbCard climbDetails={ climb } /></div> )


    return (

      <div>
        <div className='box'>
            {climbs}

        </div>
      </div>
    )
  }
}

export default ClimbContainer;
