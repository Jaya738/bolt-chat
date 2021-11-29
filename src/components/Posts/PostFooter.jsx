import { BsHeart, BsHeartFill, BsFillChatFill, BsFillCursorFill } from "react-icons/bs";

function PostFooter({ isLiked = false, handleClickLike = () => {} }) {
	return (
		<div className="post-footer">
            <div className="post-footer-icons">
                <span className="heart-icon" onClick={() => handleClickLike(isLiked)}>
                {isLiked ? <BsHeartFill /> : <BsHeart />}
                </span>
                <span className="comment-button" onClick={() => handleClickLike(isLiked)}>
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