import "./posts.css";
function PostBody({posturl}){
    return(
        <div className="post-body">
				<img src={posturl} height={300} width={500} alt='Image was not uploaded' />
			</div>
    )
}
export default PostBody;