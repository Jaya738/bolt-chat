import "./posts.css";
import Post from './Post';
import { postsData } from "../../models/posts";

const PostsList = () => {
	return (
		<div className="posts-list">
			{postsData.map(post => {
				return (
					<Post data={post} />
				)
			})} 		
		</div>
	);
}

export default PostsList;
