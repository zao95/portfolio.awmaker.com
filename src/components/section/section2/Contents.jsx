import React from 'react'
import mockup from "../../../assets/images/countap_mockup.png"
import SwiperComponent from "../../common/SwiperComponent"

const Contents = () => {
	const slideContents = [
		<div></div>,
		<div></div>,
		<div></div>,
		<div></div>,
		<div></div>,
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