import { BsPlusCircle } from "react-icons/bs";
import "./stories.css";
import { usersData } from '../../models/users';
import { BsFillPersonFill } from "react-icons/bs";

function StoryItem({ data={} }) {
	const currentUser = usersData[data?.userId];
	return (
		<div className="story-item">
            {data?.userId ? (
				<div className="story-post">
					<span className="user-logo">
						<BsFillPersonFill />
					</span>
					<span className="story-user-name">{currentUser?.userName}</span>
				</div>
				)
			: <BsPlusCircle />
			}
		</div>
	);
}

export default StoryItem;
