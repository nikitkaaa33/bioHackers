import "./homePage.scss";
import girl from "../img/girl.png";
import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const HomePage = () => {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	const words = ["OWN", "Know", "Assess", "Maintain", "Protect"];
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, 2000);

		return () => {
			clearInterval(intervalId);
		};
	}, [words.length]);
	return (
		<div className="homePage">
			<div className="homePage_header">
				<TransitionGroup>
					<CSSTransition
						key={currentWordIndex}
						timeout={1000}
						classNames="fade"
					>
						<span>{words[currentWordIndex]}</span>
					</CSSTransition>
				</TransitionGroup>{" "}
				your Mental Health with Self.
			</div>
			<p className="">
				Take quick assessments and learn about your well-being.
			</p>
			<button className="homePage_btn">
				<span>Sign Up</span>
			</button>
			<p className="homePage_descr">
				Already have an account? <span>Login</span>
			</p>
			<img src={girl} alt="" />
		</div>
	);
};
export default HomePage;
