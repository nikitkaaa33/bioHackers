import "./header.scss";
import logo from "../img/logo.png";

const Header = () => {
	return (
		<div className="header">
			<div className="header_left">
				<img src={logo} alt="" />
				<p>Your Digital Mental Health Record</p>
			</div>
			<div className="header_right">
				<p href="" className="header_right_links">
					<a href="" className="header_right_links_about">
						About
					</a>
					<a href="" className="header_right_links_sign">
						Sign Up
					</a>
					<a href="" className="header_right_links_log">
						Login
					</a>
				</p>
			</div>
		</div>
	);
};

export default Header;
