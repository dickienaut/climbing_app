import React from 'react'

export default class SignupForm extends React.Component {
    state = {
        email: "",
        password: ""
    }
    emailChange = (event) => {
        this.setState({
            email: event.target.value
        })
       }
   
       passwordChange = (event) => {
           this.setState({
               password: event.target.value
           })
          }
    render(){
        return(
        <form>
            <label for="email-field" />
            <input type="text" onChange={this.emailChange} placeholder="email" id="email-field" name="email" value={this.state.email} />
            <label for="password-field" />
            <input type="password" onChange={this.passwordChange} placeholder="password" id="password-field" name="password" value={this.state.password} />
            <button onClick={this.props.backButtonClick} >Back</button>
            <input type="submit" value="Sign Up"/>
        </form>
        )
    }
}