import { useState } from 'react';
import "./posts.css";
import { BsFillPersonFill, BsHeart, BsHeartFill, BsThreeDotsVertical } from "react-icons/bs";
import { usersData } from "../../models/users";
import firstpost from '../../assets/sushmaimage.jpg';
import secondpost from '../../assets/harishimage.jpg';
import thirdpost from '../../assets/tharunimage.jpg';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostBody from'./PostBody';
import CommentSection from './CommentSection';


function Post({ data }) {
	const [postData, setPostData] = useState(data);
	const currentUser = usersData[postData.userId];

	const handleClickLike = (isLiked) => {
		setPostData({
			...postData,
			isLiked: !isLiked,
		})
	} 

	const addNewComment = (userId, msg) => {
		setPostData({
			...postData,
			comments: [
				{
					id: Date.now(),
					userId: userId,
					commentMsg: msg,
					isLiked: false,
					likesCount: 0,
					replies: [] 
				},
				...postData.comments
			]
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
		<div className="post">
            <PostHeader currentUser={currentUser}/>
			<PostBody posturl={posturl}/>
			<PostFooter isLiked={postData?.isLiked} handleClickLike={handleClickLike} />
			<CommentSection comments={postData?.comments} addNewComment={addNewComment} />
		</div>
	);
}

export default Post;