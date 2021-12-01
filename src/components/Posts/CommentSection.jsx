import "./posts.css";
import { useState } from 'react';
import Post from './Post';
import { usersData, currentUser } from "../../models/users";
import { propTypes } from "react-bootstrap/esm/Image";
import {BsFillPersonFill} from 'react-icons/bs';

const CommentSection = ({ comments = [], addNewComment = () => {}, showInput=false }) => {
    const [commentMessage, setCommentMessage] = useState('');
    const handleInputChange = (e) => {
        setCommentMessage(e.target.value);
    }
    const handleAddComment = () => {
        commentMessage.length >0 && addNewComment(currentUser, commentMessage);
        setCommentMessage("");
    }
	return (
		<div className="comments">
            {showInput ? 
            <div className="add-comment"> 
            <BsFillPersonFill /> 
                <input 
                    className='add-comment-input'
            
                    placeholder="Add comment"
                    value={commentMessage}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddComment}>Post</button>
                </div>
                :<> </>
                }

            
            {comments.map( comment => {
                const userData = usersData[comment?.userId];
                return (
                    <div className="comment">
                        <BsFillPersonFill />
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
