import React from "react";
import PropTypps from 'prop-types';
import "../style/PostItem.css";
import like from "../image/logo192.png";
PostItem.prototype = {
    post: PropTypps.shape({
        id: PropTypps.number,
        title: PropTypps.string,
        auther: PropTypps.string,
        date: PropTypps.string,
        vote: PropTypps.number
    }).isRequired,
    onVote: PropTypps.func.isRequired
}
function PostItem (props) {
    const handleClick = () => {
        props.onVote(props.post.id)
    }
    const { post } = props;
        return (
            <li className="item">
                <div className="title">
                    {post.title}
                </div>
                <div>
                    Auther: <span>{post.auther}</span> 
                </div>
                <div>
                    Date: <span>{post.date}</span>
                </div>
                <div className="like">
                    <span>
                        <img src={like} onClick={handleClick}/>
                    </span>
                    <span>
                        {post.vote}
                    </span>
                </div>
            </li>
        )
    }
export default PostItem;
