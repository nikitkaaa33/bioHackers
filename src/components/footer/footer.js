import "./footer.scss";
import logo from "../img/logo.png";
import twitter from "../img/twitter.png";
import ig from "../img/ig.png";
import linked from "../img/linkedin.png";

const Footer = () => {
	return (
		<div className="footer">
			<img src={logo} className="footer_logo"></img>
			<a href="#" className="footer_about">
				About
			</a>
			<a href="#" className="footer_about_blog">
				Blog
			</a>
			<a href="#" className="footer_about_team">
				Team
			</a>
			<a href="#" className="footer_about_press">
				Press
			</a>
			<a href="" className="footer_contact">
				Contact
			</a>
			<a href="" className="footer_contact_FAQ">
				FAQ
			</a>
			<a href="" className="footer_contact_customer">
				Customer service
			</a>
			<a href="" className="footer_resourses">
				Resourses
			</a>
			<a href="" className="footer_resourses_mental">
				Mental Health Partners
			</a>
			<img src={twitter} alt="" className="footer_social_1" />
			<img src={ig} alt="" className="footer_social_2" />
			<img src={linked} alt="" className="footer_social_3" />
		</div>
	);
};

export default Footer;
