import "./posts.css";
import { BsFillPersonFill, BsThreeDotsVertical } from "react-icons/bs";

function PostHeader({currentUser}){
	return (
            <div className="post-header">
				<div className="header-left-content">
					<span className="user-logo">
						<BsFillPersonFill />
					</span>
					<span className="user-name">
						{currentUser.userName}
					</span>
				</div>
				<span className="action-menu">
					<BsThreeDotsVertical />
				</span>
			</div>
	);
}

export default PostHeader;