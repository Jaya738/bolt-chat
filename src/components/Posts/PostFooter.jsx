import { BsHeart, BsHeartFill } from "react-icons/bs";

function PostFooter({ isLiked = false, handleClickLike = () => {} }) {
	return (
		<div className="post-footer">
            <div className="post-footer-icons">
                <span onClick={() => handleClickLike(isLiked)}>
                {isLiked ? <BsHeartFill /> : <BsHeart />}
                </span>
            </div>
        </div>
	);
}

export default PostFooter;