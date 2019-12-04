import React from 'react';

const Comment = (props) => {
    return(<div>
        <h4>{props.email}</h4>
        <p>{props.content}</p>
    </div>)


}

export default Comment;
