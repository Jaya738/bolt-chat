import "./posts.css";
import { useState } from 'react';
// import Post from './Post';
import { usersData, currentUser } from "../../models/users";

const CommentSection = ({ comments = [], addNewComment = () => {} }) => {
    const [commentMessage, setCommentMessage] = useState('');
    const handleInputChange = (e) => {
        setCommentMessage(e.target.value);
    }
    const handleAddComment = () => {
        addNewComment(currentUser, commentMessage);
        setCommentMessage("");
    }
	return (
		<div className="comments">
            <div className="add-comment">
                <input 
                    placeholder="Add comment"
                    value={commentMessage}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddComment}>Post</button>
            </div>
            {comments.map( comment => {
                const userData = usersData[comment?.userId];
                return (
                    <div className="comment">
                        <div className="user-name">
                            <b>{userData?.userName}</b>:
                        </div>
                        <div className="comment-msg">
                            {comment?.commentMsg}
                        </div>
                    </div>
                )
            })}
		</div>
	);
}

export default CommentSection;
