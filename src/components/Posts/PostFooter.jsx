import { BsHeart, BsHeartFill, BsFillChatFill, BsFillCursorFill } from "react-icons/bs";

function PostFooter({ isLiked = false, handleClickLike = () => {},handleClickComment=()=>{} }) {
	return (
		<div className="post-footer">
            <div className="post-footer-icons">
                <span className="heart-icon" onClick={() => handleClickLike(isLiked)}>
                {isLiked ? <BsHeartFill /> : <BsHeart />}
                </span>
                <span className="comment-button" onClick={() => handleClickComment()}>
                    <BsFillChatFill /> <span className="comment-text">Comment</span>
                </span>
                <span onClick={() => handleClickLike(isLiked)}>
                    <BsFillCursorFill />
                </span>
            </div>
        </div>
	);
}

export default PostFooter;