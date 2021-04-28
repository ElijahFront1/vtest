import React from 'react'
import './post.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function Post({ title, body, name }) {
    return (
        <div className="col-xl-4 post-wrapper">
            <div className="post">
                <h5>{title}</h5>
                <span>{body}</span>
                <div className="name">{name}</div>
            </div>
        </div>
    )
}

export default Post
