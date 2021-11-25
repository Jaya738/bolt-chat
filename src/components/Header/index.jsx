import React from "react";
import { BsFillChatRightTextFill, BsFillBellFill, BsFillCursorFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import './header.css';
import logo from '../../assets/bolt-logo.jfif';

const Header = () => {
	return (
		<div className="app-header">
			<div className="header-logo">
				{/* <img src={logo} alt='BOLT' /> */}
				BOLT
			</div>
			<div className="header-icons">
				<BsFillChatRightTextFill />
				<BsFillBellFill />
				<BsFillCursorFill />
			</div>
		</div>
	);
};

export default Header;
