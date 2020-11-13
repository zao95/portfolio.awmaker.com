import React from 'react'
import mockup from "../../../assets/images/online_portfolio_mockup.png"

const Contents = () => {
	return (
		<>
            <div id="section1Contents" className="contentsPageWrap pageWrap">
				<div className="contentsWrap">
					<p className="title condensed">
						CONVERGENCE OF 2D AND 3D WEBGL
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
					<div className="slideShow">

					</div>
				</div>
			</div>
		</>
	)
}

export default Contents