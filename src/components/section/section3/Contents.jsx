import React from 'react'
import mockup from "../../../assets/images/taja_mockup.png"

const Contents = () => {
	return (
		<>
            <div id="section3Contents" className="contentsPageWrap pageWrap">
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
					<div className="slideShow">

					</div>
				</div>
			</div>
		</>
	)
}

export default Contents