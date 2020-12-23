import React from 'react'
import mockup from "../../../assets/images/countap_mockup.png"
import SwiperComponent from "../../common/SwiperComponent"
import slide00 from "../../../assets/slides/02/00.mp4"
import slide01 from "../../../assets/slides/02/01.png"
import slide02 from "../../../assets/slides/02/02.png"
import slide03 from "../../../assets/slides/02/03.png"
import slide04 from "../../../assets/slides/02/04.png"
import slide05 from "../../../assets/slides/02/05.png"
import slide06 from "../../../assets/slides/02/06.png"
import slide07 from "../../../assets/slides/02/07.png"
import slide08 from "../../../assets/slides/02/08.png"
import slide09 from "../../../assets/slides/02/09.png"

const Contents = () => {
	const slideContents = [
		<video controls>
			<source src={slide00} type="video/mp4"></source>
		</video>,
		<div style={{backgroundImage: `url(${slide01})`}}></div>,
		<div style={{backgroundImage: `url(${slide02})`}}></div>,
		<div style={{backgroundImage: `url(${slide03})`}}></div>,
		<div style={{backgroundImage: `url(${slide04})`}}></div>,
		<div style={{backgroundImage: `url(${slide05})`}}></div>,
		<div style={{backgroundImage: `url(${slide06})`}}></div>,
		<div style={{backgroundImage: `url(${slide07})`}}></div>,
		<div style={{backgroundImage: `url(${slide08})`}}></div>,
		<div style={{backgroundImage: `url(${slide09})`}}></div>,
	]
	return (
		<>
            <div id="section2Contents" className="contentsPageWrap pageWrap">
				<div className="contentsWrap">
					<p className="title condensed">
						Sharing Accounting Book
					</p>
					<div className="mainWrap">
						<div className="leftWrap">
							<div className="contents">
								Breaking away from the website design trend 
								with many static parts, we boldly used the 
								elements of animation and 3D. I tried to look 
								neat and neat, emphasizing the design 
								sophistication and moderation.
							</div>
						</div>
						<div className="lineVertical line" />
						<div className="rightWrap">
							<div className="contents">
								It also evolved UX from one-sided information 
								delivery to two-way communication, and put in 
								a lot of the latest trends such as REACT, 
								THREE.JS, and P5.JS.
							</div>
						</div>
					</div>
					<div className="mockup" style={{backgroundImage: `url(${mockup})`}} />
					<SwiperComponent contents={slideContents} />
				</div>
			</div>
		</>
	)
}

export default Contents