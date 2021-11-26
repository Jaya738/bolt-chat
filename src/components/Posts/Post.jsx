import { useState } from 'react';
import "./posts.css";
import { BsFillPersonFill, BsHeart, BsHeartFill, BsThreeDotsVertical } from "react-icons/bs";
import { usersData } from "../../models/users";
import firstpost from '../../assets/sushmaimage.jpg';
import secondpost from '../../assets/harishimage.jpg';
import thirdpost from '../../assets/tharunimage.jpg';
import PostFooter from './PostFooter';

function Post({ data }) {
	const [postData, setPostData] = useState(data);
	const currentUser = usersData[postData.userId];

	const handleClickLike = (isLiked) => {
		setPostData({
			...postData,
			isLiked: !isLiked,
		})
	} 

	let posturl = "";
	if(currentUser.userName == "the_dreamer_champ")
		posturl = firstpost;
	else if(currentUser.userName == "harish_btech")
		posturl = secondpost;
	else
		posturl = thirdpost;

	return (
		<div className="post" key={postData.id}>
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
				<img src={posturl} height={300} width={500} alt='Image was not uploaded' />
			</div>
			<PostFooter isLiked={postData?.isLiked} handleClickLike={handleClickLike} />
		</div>
	);
}

export default Post;