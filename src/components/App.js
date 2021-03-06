import React, {Fragment} from 'react';
import '../App.css';
import Nav from './Nav.js';
import AboutPage from './AboutPage.js'
import ClimbContainer from './ClimbContainer.js';
import ButtonContainer from "./ButtonContainer.js"
import LoginForm from "./LoginForm.js"
import SignupForm from "./SignupForm.js"
import ClimbPage from './ClimbPage.js'
import ProfilePage from './ProfilePage.js'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'


class App extends React.Component {

  state = {
    climbs: [],
    menuType: null,
    isDisplaying: false,
    displayClimb: {},
    session: false,
    loggedInUser: null
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
        return <SignupForm backButtonClick={this.menuBack} handleLogin={this.handleLogin}  />
      case "login":
        return <LoginForm backButtonClick={this.menuBack} handleLogin={this.handleLogin}  />
      default:
        return <ButtonContainer signupClick={this.changeToSignup} loginClick={this.changeToLogin} />
    }
  }


  showClimbPage = (event) => {
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

  handleLogin = (user) =>{
    this.setState({
      session: true,
      loggedInUser: user,
      menuType: null
    })
  }

  handleLogout = () => {
    this.setState({
      session: false,
      loggedInUser: null
    })
  }

  renderClimbs = () => {
  if (this.state.isDisplaying) {
    return <ClimbPage info={this.state} climbInfo={this.state.displayClimb} displayAllClimbs={this.displayAllClimbs}/>
  } else { 
    return < ClimbContainer showClimbPage={this.showClimbPage} climbs={this.state.climbs} /> 
  }
  }

  renderProfilePage = () => {
    return (<Fragment>
      {this.state.session ? <ProfilePage deleteProfile={this.deleteProfile} onEdit={this.handleLogin} user={this.state.loggedInUser}/> : <Redirect to='/' /> }
    </Fragment>)
  }




  deleteProfile = (user_id) => {
    fetch(`http://localhost:3000/users/${user_id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: user_id})
      })
      .then(res => res.json()) // OR res.json()
      .then(deletedUser => 
        this.setState({
          session: false,
          loggedInUser: null
        })
      )
      .catch(error => {
        this.setState({
          session: false,
          loggedInUser: null
        })
      })
  }



  render() {

    return (
      <div className='App'>
        <header className="App-header">
        < Nav handleLogout={this.handleLogout} renderMenu={this.renderMenu} isLoggedIn={this.state.session} loggedInUser={this.state.loggedInUser} />
        <aside className="sidebar">
            <ul>
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/climbs">Climbs</NavLink>
              </li>

              {
                this.state.session ? <NavLink exact to="/profile">My Profile</NavLink> : null
              }
              
            </ul>
          </aside>
         </header>
         <Switch>
           <Route path="/climbs" render={this.renderClimbs} />
           <Route path="/profile" render={this.renderProfilePage} />
           <Route path="/" component={ AboutPage } />
         </Switch>
      {/* {this.state.isDisplaying ? <ClimbPage info={this.state} climbInfo={this.state.displayClimb} displayAllClimbs={this.displayAllClimbs}/> : < ClimbContainer showClimbPage={this.showClimbPage} climbs={this.state.climbs} /> } */}
      </div>
    )
  }
}

export default App
