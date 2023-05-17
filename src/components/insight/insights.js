import "./insights.scss";
import girl from "../img/insight.png";

const Insights = () => {
	return (
		<div className="insights">
			<span className="insights_square">
				<span className="insights_square_p">
					Insights into your mental <br /> health in minutes
				</span>
				<p className="insights_p_Depression">Depression</p>
				<p className="insights_p_Loneliness">Loneliness</p>
				<p className="insights_p_Anxiety">Anxiety</p>
				<p className="insights_p_Stress">Stress</p>
				<p className="insights_p_and More">and More</p>
			</span>
			<button className="insight_btn">
				<span>Learn more</span>
			</button>
			<img src={girl} alt="" />
			<p className="insights_girlp">Multiple assessments </p>
		</div>
	);
};

export default Insights;
