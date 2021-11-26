import "./footer.css";
import {BsPerson,BsFillCollectionPlayFill,BsHouseDoor,BsHeart,BsSearch } from "react-icons/bs";
function Footer() {
	return (
		<div className="footer">
			<div className="footer-icons">
				<BsHouseDoor/>
				<BsSearch />
				<BsFillCollectionPlayFill/>
				<BsHeart/>
				<BsPerson/>
			</div>
		</div>
	);
}

export default Footer;
