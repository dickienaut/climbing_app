import React from 'react';
import NewCommentForm from './NewCommentForm.js'
import Comment from './Comment.js'
// adding comments to page

class ClimbPage extends React.Component {

  state = {
    comments: []
  }

  addComment = (comment) =>{
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/comments')
    .then(r => r.json())
    .then(coms => {
      this.setState({
        comments: coms.filter(comment => parseInt(comment.climb_id) === parseInt(this.props.climbInfo.id))
      })
    })

  }
 render(){
    return (
      <div>
        <img alt={this.props.climbInfo.name} src={this.props.climbInfo.imgSmallMed}/>
        <header>
          <h3>{this.props.climbInfo.name}</h3>
          <h3>{this.props.climbInfo.rating}</h3>

    <h3>{this.props.climbInfo.location[1]}{', '}{this.props.climbInfo.location[0]}</h3>
          {this.props.info.loggedInUser ? <NewCommentForm addComment={this.addComment} climbId={this.props.climbInfo.id} userId={this.props.info.loggedInUser.id} /> : null}

          {this.state.comments.map(comment => {
            return <Comment email={comment.user.email} content={comment.content} />
          })}

          <button onClick={this.props.displayAllClimbs}>Back</button>
        </header>
      </div>

    )
   }
}

export default ClimbPage;
