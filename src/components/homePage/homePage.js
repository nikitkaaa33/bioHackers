import "./homePage.scss";
import girl from "../img/girl.png";

const HomePage = () => {
	return (
		<div className="homePage">
			<header className="homePage_header">
				<span>Own </span>your Mental Health with Self.
			</header>
			<p className="">
				Take quick assessments and learn about your well-being.
			</p>
			<button className="homePage_btn">
				<span>Sign Up</span>
			</button>
			<p className="homePage_acc">
				Already have an account? <span>Login</span>
			</p>
			<img src={girl} alt="" />
		</div>
	);
};
export default HomePage;
