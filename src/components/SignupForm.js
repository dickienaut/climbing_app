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

          handleSubmit = (e) => {
            e.preventDefault();
            
            fetch('http://localhost:3000/users',{
             method: "POST",
             body: JSON.stringify({
              email: this.state.email,
              password_digest: this.state.password
             }),
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
               }
          })
            .then(r => r.json())
            .then(user => {
                this.props.handleLogin(user)
            })
        }

    render(){
        return(
        <form onSubmit={this.handleSubmit}>
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