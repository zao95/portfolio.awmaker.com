import React from 'react'
import countapVideo from "../../../assets/video/countap.mp4"

const Title = () => {
	return (
		<>
            <div id="section2Title" className="titlePageWrap pageWrap">
				<div className="titleWrap">
					<div className="background">
						<div className="videoWrap">
							<video className="video" autoPlay muted={true}>
								<source src={countapVideo} type="video/mp4" />
							</video>
						</div>
						<div className="dark" />
					</div>
					<div className="overlayWrap">
						<div className="titleBox">
							<p className="title condensed">
								countap
							</p>
						</div>
						<div className="lineVertical line"></div>
						<div className="contentsWrap">
							<p><b>countap</b></p>
							<p><b>TEAM PROJECT</b></p>
							<p>&nbsp;</p>
							<p><b>PLATFORM</b></p>
							<p>WEBSITE</p>
							<p>&nbsp;</p>
							<p><b>ROLE</b></p>
							<p>PLAN</p>
							<p>DESIGN</p>
							<p>DEVELOPE</p>
							<p>&nbsp;</p>
							<p><b>SIZE</b></p>
							<p>RESPONSIVE</p>
							<p>BASED ON 1920 x 1080</p>
							<p>&nbsp;</p>
							<p><b>TOOLS</b></p>
							<p>ADOBE PHOTOSHOP</p>
							<p>ADOBE ILLUSTRATOR</p>
							<p>VS CODE</p>
							<p>&nbsp;</p>
							<p><b>SKILLS</b></p>
							<p>SASS</p>
							<p>ECMASCRIPT</p>
							<p>THREE.JS</p>
							<p>P5.JS</p>
							<p>REACT</p>
							<p>REDUX</p>
							<p>AWS ARCHITECTURE</p>
						</div>
						<div className="indexWrap">
							<div className="lineVertical line"></div>
							<p className="index">
								website
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Title