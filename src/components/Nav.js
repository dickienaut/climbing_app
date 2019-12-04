import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Your Climbs</span>
			<div className="YourClimbs">
			</div>
			<span className="normalText">A React App for your climbs</span>
			{props.renderMenu()}

		</div>
	)
}

export default Nav
