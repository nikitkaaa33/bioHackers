import "./testimonials.scss";
import photo1 from "../img/girlffeed.png";
import photo2 from "../img/man1.png";
import photo3 from "../img/man2.png";
import arrowL from "../img/arrowL.png";
import arrowR from "../img/arrowR.png";
import up from "../img/up.png";
import vertical from "../img/vertical.png";

const Testimonials = () => {
	return (
		<div className="testimonials">
			<img src={arrowL} alt="" className="testimonials_arrow_L" />
			<div className="testimonials_header">Testimonials</div>
			<img src={photo1} className="testimonials_img_1"></img>
			<img src={photo2} className="testimonials_img_2"></img>
			<img src={photo3} className="testimonials_img_3"></img>
			<img src={up} alt="" className="testimonials_img_up1" />
			<img src={up} alt="" className="testimonials_img_up2" />
			<img src={up} alt="" className="testimonials_img_up3" />
			<p className="testimonials_descr_1">
				I used to think I knew myself, but Self helped me finally put a complete
				picture of myself together.
				<br />
				<br />
				<br /> -- Anonymous
			</p>
			<p className="testimonials_descr_2">
				I used to think I knew myself, but Self helped me finally put a complete
				picture of myself together. <br />
				<br />
				<br />
				-- Anonymous
			</p>
			<p className="testimonials_descr_3">
				I used to think I knew myself, but Self helped me finally put a complete
				picture of myself together.
				<br />
				<br />
				<br /> -- Anonymous
			</p>
			<img src={vertical} className="testimonials_img_vertical1"></img>
			<img src={vertical} className="testimonials_img_vertical2"></img>
			<img src={arrowR} alt="" className="testimonials_arrow_R" />
		</div>
	);
};

export default Testimonials;
