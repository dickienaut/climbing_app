import React from 'react'
import WelcomeNav from './WelcomeNav.js'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Your Climbs</span><br></br>
			<span className="normalText">A React App for your climbs</span>
			{props.isLoggedIn ? <WelcomeNav logout={props.handleLogout} user={props.loggedInUser} /> : props.renderMenu()}

		</div>
	)
}

export default Nav
