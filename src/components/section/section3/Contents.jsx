import React from 'react'
import mockup from "../../../assets/images/taja_mockup.png"
import SwiperComponent from "../../common/SwiperComponent"
import slide00 from "../../../assets/slides/03/00.png"
import slide01 from "../../../assets/slides/03/01.png"
import slide02 from "../../../assets/slides/03/02.png"
import slide03 from "../../../assets/slides/03/03.png"
import slide04 from "../../../assets/slides/03/04.png"
import slide05 from "../../../assets/slides/03/05.png"
import slide06 from "../../../assets/slides/03/06.png"
import slide07 from "../../../assets/slides/03/07.png"
import slide08 from "../../../assets/slides/03/08.png"
import slide09 from "../../../assets/slides/03/09.png"
import slide10 from "../../../assets/slides/03/10.png"
import slide11 from "../../../assets/slides/03/11.png"
import slide12 from "../../../assets/slides/03/12.png"
import slide13 from "../../../assets/slides/03/13.png"

const Contents = () => {
	const slideContents = [
		<div style={{backgroundImage: `url(${slide00})`}}></div>,
		<div style={{backgroundImage: `url(${slide01})`}}></div>,
		<div style={{backgroundImage: `url(${slide02})`}}></div>,
		<div style={{backgroundImage: `url(${slide03})`}}></div>,
		<div style={{backgroundImage: `url(${slide04})`}}></div>,
		<div style={{backgroundImage: `url(${slide05})`}}></div>,
		<div style={{backgroundImage: `url(${slide06})`}}></div>,
		<div style={{backgroundImage: `url(${slide07})`}}></div>,
		<div style={{backgroundImage: `url(${slide08})`}}></div>,
		<div style={{backgroundImage: `url(${slide09})`}}></div>,
		<div style={{backgroundImage: `url(${slide10})`}}></div>,
		<div style={{backgroundImage: `url(${slide11})`}}></div>,
		<div style={{backgroundImage: `url(${slide12})`}}></div>,
		<div style={{backgroundImage: `url(${slide13})`}}></div>,
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
					<SwiperComponent contents={slideContents} application />
				</div>
			</div>
		</>
	)
}

export default Contents