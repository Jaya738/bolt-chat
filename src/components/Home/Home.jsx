import Header from "../Header/index";
import "./home.css";
import Stories from "../Stories/Stories";
import PostsList from "../Posts/PostsList";
import Footer from "../Footer/Footer";

function Home() {
	return (
		<div className="home-page">
			<Header />
            <Stories />
            <PostsList />
            <Footer />
		</div>
	);
}

export default Home;
