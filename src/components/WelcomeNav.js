import React from 'react'

const WelcomeNav = (props) => {
    return(<React.Fragment>
    <h4>Welcome, {props.user.email}</h4>
    <button onClick={props.logout}>Logout</button>
    </React.Fragment>
    )

}

export default WelcomeNav;