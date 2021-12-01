import "./footer.css";
import { Link } from 'react-router-dom';
import {BsPerson,BsFillCollectionPlayFill,BsHouseDoor,BsHeart,BsSearch } from "react-icons/bs";
import { paths } from "../../routes/paths";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-icons">
				<Link to={paths.home}><BsHouseDoor /></Link>
				<Link to={paths.search}><BsSearch /></Link>
				<Link to={paths.reels}><BsFillCollectionPlayFill /></Link>
				<Link to={paths.notifications}><BsHeart /></Link>
				<Link to={paths.profile}><BsPerson /></Link>
			</div>
		</div>
	);
}

export default Footer;
