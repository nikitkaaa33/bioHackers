import "./insights.scss";
import girl from "../img/insight.png";
import React, { Component, useState } from "react";
import Slider from "react-slick";

const Insights = () => {
	const [currentPicture, setCurrentPicture] = useState(0);
	const pictures = [
		{
			text: "Multiple assessments 1",
			imageUrl: girl,
			word: "Depression",
		},
		{
			text: "Multiple assessments 2",
			imageUrl:
				"https://oir.mobi/uploads/posts/2021-06/1623616259_4-oir_mobi-p-devochka-na-prirode-priroda-krasivo-foto-4.jpg",
			word: "Loneliness",
		},
		{
			text: "Multiple assessments 3",
			imageUrl: "https://oir.mobi/uploads/posts/2020-01/1578337673_7-10.jpg",
			word: "Anxiety",
		},
		{
			text: "Multiple assessments 4",
			imageUrl:
				"https://www.firestock.ru/wp-content/uploads/2017/06/Devushka-na-prirode-The-girl-on-the-nature--700x466.jpg",
			word: "Stress",
		},
		{
			text: "Multiple assessments 5",
			imageUrl: "https://example.com/image3.jpg",
			word: "and More",
		},
		// Добавьте больше элементов здесь
	];

	const handleClick = (index) => {
		setCurrentPicture(index);
	};

	return (
		<div className="insights">
			<span className="insights_square">
				<span className="insights_square_p">
					Insights into your mental <br />
					health in minutes
				</span>
				<div>
					{pictures.map((picture, index) => {
						let classNameS = `insights_btns_${index}`;
						return (
							<div className="insights_btns">
								<button
									className={classNameS}
									key={index}
									onClick={() => handleClick(index)}
								>
									<span>{picture.word}</span>
								</button>
							</div>
						);
					})}
				</div>
			</span>
			<button className="insights_btn">
				<span className="insights_btn">Learn more</span>
			</button>
			<img src={pictures[currentPicture].imageUrl} alt="" />
			<p className="insights_girlp">{pictures[currentPicture].text}</p>
		</div>
	);
};

export default Insights;

// export default Insights;
