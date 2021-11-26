import Header from "../Header/index";
import "./home.css";
import Stories from "../Stories/Stories";
import PostsList from "../Posts/PostsList";

function Home() {
	return (
		<div className="home-page">
			<Header />
            <Stories />
            <PostsList />
		</div>
	);
}

export default Home;
