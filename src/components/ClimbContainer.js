import React from 'react';
import ClimbCard from './ClimbCard'



class ClimbContainer extends React.Component {

  // state = {
  //     climbs: this.props.climbs
  // }

  render() {

    const climbs = this.props.climbs.map((climb) => <div key={climb.id} className="climb-card"> <ClimbCard showClimbPage={this.props.showClimbPage} climbDetails={ climb } /></div> )


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
