import React from 'react';
import '../App.css';
import Nav from './Nav';
// import climbs from '../climbdata';
import ClimbContainer from './ClimbContainer';
import ButtonContainer from "./ButtonContainer.js"
import LoginForm from "./LoginForm.js"
import SignupForm from "./SignupForm.js"


class App extends React.Component {

  state = {
    climbs: [],
    menuType: null
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

  render() {

    return (
      <div className='App'>
        < Nav renderMenu={this.renderMenu} />
        < ClimbContainer climbs={this.state.climbs} />
        {/* < Climb Details /> */}
      </div>
    )
  }
}

export default App
