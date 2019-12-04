import React from 'react';
import Comment from './Comment'
// adding comments to page

const ClimbPage = (props) => {


    return (
      <div>
        <img src={props.climbInfo.imgSmallMed}/>
        <header>
          <h3>{props.climbInfo.name}</h3>
          <h3>{props.climbInfo.rating}</h3>
          <h3>{props.climbInfo.location}</h3>
          <button onClick={props.displayAllClimbs}>Back</button>
        </header>
      </div>

    )
}

export default ClimbPage;
