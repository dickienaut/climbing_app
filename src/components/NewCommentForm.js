import React from 'react'

export default class NewCommentForm extends React.Component {

    state = {
        content: ""
    }

    contentChange = (event) => {
        this.setState({
            content: event.target.value
        })
       }

       handleSubmit = (e) => {
           e.preventDefault();
           
           fetch('http://localhost:3000/comments',{
            method: "POST",
            body: JSON.stringify({
             content: this.state.content,
             climb_id: this.props.climbId,
             user_id: this.props.userId
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
         })
           .then(r => r.json())
           .then(comment => {
               this.props.addComment(comment)
           })
       }

    render(){
        return(<form id="comment-form" onSubmit={this.handleSubmit} >
        <input type="text" name="content" onChange={this.contentChange} />
        <input type="submit" value="Submit" />
      </form>

        )
    }

}