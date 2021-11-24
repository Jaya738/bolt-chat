import React from "react";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

const Header = () => {
	return (
		<div>
			<p>
				<BsFillChatRightTextFill />
				Bolt
			</p>
		</div>
	);
};

export const ReactLink = () => {
	return (
		<Button className="App-link" target="_blank" rel="noopener noreferrer">
			Learn React
		</Button>
	);
};

export default Header;
