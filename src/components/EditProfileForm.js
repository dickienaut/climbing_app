import React from 'react'


export default class EditProfileForm extends React.Component {
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
            
            fetch(`http://localhost:3000/users/${this.props.user.id}`,{
             method: "PATCH",
             body: JSON.stringify({
              email: this.state.email,
              password: this.props.password
             }),
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
               }
          })
            .then(r => r.json())
            .then(newUserInfo => {
                this.props.onEdit(newUserInfo)
            })
        }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.emailChange} type="text" placeholder="New email..." value={this.state.email} />
                <input onChange={this.passwordChange} type="password" placeholder="New password..." value={this.state.password}/>
                <input type="submit" value="Save" />
            </form>
        )
    }

}