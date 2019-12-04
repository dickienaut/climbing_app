import React, {Fragment, Component} from 'react';

class ClimbCard extends Component {

  state = {
    details: false
  }

  showDetails = () => {
    this.setState({
      details: !this.state.details
    })
  }


  render() {

    return (
      <Fragment >
        <img id={this.props.climbDetails.id} onClick={this.props.showClimbPage} alt={this.props.climbDetails.name} src={this.props.climbDetails.imgSmallMed}/>
          <br></br>
          <div>
            <h3>{this.props.climbDetails.name} {' | '} {this.props.climbDetails.rating}</h3>
          </div>
      </Fragment>
    )
  }
}

export default ClimbCard;




// <img alt={''} onClick={this.showDetails} src={this.props.climbImages.imgSmallMed}/>
//   <br></br>
// {this.state.details ?
//   <div>
//     <h2>{this.props.climbImages.name}</h2>
//     <h2>{this.props.climbImages.rating}</h2>
//     {
//   // <h2>{this.props.climbImages.stars}</h2>
//   //   <h2>{this.props.climbImages.location[1] + ", " + this.props.climbImages.location[0]}</h2>
//     }
//   </div>
//    : null}
