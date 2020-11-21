import React from 'react'
import mockup from "../../../assets/images/nutry_mockup.png"
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