import React from 'react'
import mockup from "../../../assets/images/nutry_mockup.png"
import SwiperComponent from "../../common/SwiperComponent"
import slide00 from "../../../assets/slides/04/00.png"
import slide01 from "../../../assets/slides/04/01.png"
import slide02 from "../../../assets/slides/04/02.png"
import slide03 from "../../../assets/slides/04/03.png"
import slide04 from "../../../assets/slides/04/04.png"

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
            <div id="section4Contents" className="contentsPageWrap pageWrap applicationPageWrap">
				<div className="contentsWrap">
					<p className="title condensed">
						Nutrition Analysis Application
					</p>
					<div className="mainWrap">
						<div className="leftWrap">
							<div className="contents">
								It is a project that only designed an application 
								that helps you to set your own nutritional 
								balance. Based on the strong chroma, we used 
								a lot of strong colors.
							</div>
						</div>
						<div className="lineVertical line" />
						<div className="rightWrap">
							<div className="contents">
								and the main colors of each menu  were 
								different so that we could intuitively know 
								what menu it is currently located in. Also, 
								we tried to help you understand UI by 
								providing a tutorial on screen descriptions.
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