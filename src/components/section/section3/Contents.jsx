import React from 'react'
import mockup from "../../../assets/images/taja_mockup.png"
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
            <div id="section3Contents" className="contentsPageWrap pageWrap applicationPageWrap">
				<div className="contentsWrap">
					<p className="title condensed">
						Taxi-sharing application
					</p>
					<div className="mainWrap">
						<div className="leftWrap">
							<div className="contents">
								We have created an application 
								for taxi drivers through real-time 
								chatting. We tried to make it 
								intuitive and natural for users to use 
								it as if they had already used it.
							</div>
						</div>
						<div className="lineVertical line" />
						<div className="rightWrap">
							<div className="contents">
								Developmentally, we created a fast 
								and error-free chat function using 
								Sendbird. Also, we designed it with 
								maximum maintenance.
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