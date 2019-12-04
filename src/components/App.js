import React from 'react';
import '../App.css';
import Nav from './Nav.js';
import ClimbContainer from './ClimbContainer.js';
import ButtonContainer from "./ButtonContainer.js"
import LoginForm from "./LoginForm.js"
import SignupForm from "./SignupForm.js"
import ClimbPage from './ClimbPage.js'


class App extends React.Component {

  state = {
    climbs: [],
    menuType: null,
    isDisplaying: false,
    displayClimb: {}

  }

  changeToLogin = () => {
    this.setState({
      menuType: "login"
    })
  }

  changeToSignup = () => {
    this.setState({
      menuType: "signup"
    })
  }

  menuBack = () => {
    this.setState({
      menuType: null
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/climbs')
    .then(r => r.json())
    .then(allClimbs => {
      this.setState({
        climbs: allClimbs
      })
    })
  }

  renderMenu = () => {
    switch (this.state.menuType){
      case null:
        return <ButtonContainer signupClick={this.changeToSignup} loginClick={this.changeToLogin} />
      case "signup":
        return <SignupForm backButtonClick={this.menuBack} />
      case "login":
        return <LoginForm backButtonClick={this.menuBack} />
      default:
        return <ButtonContainer signupClick={this.changeToSignup} loginClick={this.changeToLogin} />
    }
  }


  showClimbPage= (event) => {
    console.log(event.target.id)
    this.setState({
      isDisplaying: true,
      displayClimb: this.state.climbs.find(climb => parseInt(climb.id) === parseInt(event.target.id))
    })
  }

  displayAllClimbs= () => {

    this.setState({
      isDisplaying: false
    })
  }



  render() {
    console.log(this.state.displayClimb)

    return (
      <div className='App'>
        < Nav renderMenu={this.renderMenu} />
      {this.state.isDisplaying ? <ClimbPage climbInfo={this.state.displayClimb} displayAllClimbs={this.displayAllClimbs}/> : < ClimbContainer showClimbPage={this.showClimbPage} climbs={this.state.climbs} /> }
        {/* < Climb Details /> */}
      </div>
    )
  }
}

export default App
