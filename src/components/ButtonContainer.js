import React from 'react'

const ButtonContainer = (props) => {
	return (
		
			<div>
				<button onClick={props.loginClick} >Log In</button>
				<button onClick={props.signupClick} >Sign Up</button>
			</div>
	)
}

export default ButtonContainer