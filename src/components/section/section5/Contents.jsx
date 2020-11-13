import React from 'react'
import mockup from "../../../assets/images/restai_mockup.png"

const Contents = () => {
	return (
		<>
            <div id="section5Contents" className="contentsPageWrap pageWrap">
				<div className="contentsWrap">
					<p className="title condensed">
						AR Restaurant Reservation Platform
					</p>
					<div className="mainWrap">
						<div className="leftWrap">
							<div className="contents">
								It is an application design with a concept that 
								informs the inside situation of the restaurant 
								and even helps with reservation by just taking 
								a picture of the sign with the camera using AR. 
								I designed and imagined the direction of UI/UX 
								for the next generation by creating future 
								technologies instead of current ones.
							</div>
						</div>
						<div className="lineVertical line" />
						<div className="rightWrap">
							<div className="contents">
								We used a lot of chat-type tutorials and slide UI, and we 
								added different functions depending on the 
								direction of the slides so that we can add various 
								functions even if the UI is not complicated 
								on one screen.
							</div>
						</div>
					</div>
					<div className="mockup" style={{backgroundImage: `url(${mockup})`}} />
					<div className="slideShow">
						Slide Show
					</div>
				</div>
			</div>
		</>
	)
}

export default Contents