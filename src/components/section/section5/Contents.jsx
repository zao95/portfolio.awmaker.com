import React from 'react'
import mockup from "../../../assets/images/restai_mockup.png"
import SwiperComponent from "../../common/SwiperComponent"
import slide00 from "../../../assets/slides/05/00.png"
import slide01 from "../../../assets/slides/05/01.png"
import slide02 from "../../../assets/slides/05/02.png"
import slide03 from "../../../assets/slides/05/03.png"
import slide04 from "../../../assets/slides/05/04.png"

const Contents = () => {
	const slideContents = [
		<div style={{backgroundImage: `url(${slide00})`}}></div>,
		<div style={{backgroundImage: `url(${slide01})`}}></div>,
		<div style={{backgroundImage: `url(${slide02})`}}></div>,
		<div style={{backgroundImage: `url(${slide03})`}}></div>,
		<div style={{backgroundImage: `url(${slide04})`}}></div>,
	]
	return (
		<>
            <div id="section5Contents" className="contentsPageWrap pageWrap applicationPageWrap">
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
					<SwiperComponent contents={slideContents} application />
				</div>
			</div>
		</>
	)
}

export default Contents