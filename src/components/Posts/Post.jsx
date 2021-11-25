import "./posts.css";
import { BsFillPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { usersData } from "../../models/users";

function Post({ data }) {
	const { id, userId } = data;
	const currentUser = usersData[userId]
	return (
		<div className="post">
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
			<div className="post-body">
				{/* <img /> */} // TODO Sravani
			</div>
			<div className="post-footer">
				// TODO - Venkat
			</div>
		</div>
	);
}

export default Post;