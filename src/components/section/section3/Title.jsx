import React from 'react'
import tajaVideo from "../../../assets/video/taja.mp4"

const Title = () => {
	return (
		<>
            <div id="section3Title" className="titlePageWrap pageWrap">
				<div className="titleWrap">
					<div className="background">
						<div className="videoWrap">
							<video className="video" autoPlay muted={true}>
								<source src={tajaVideo} type="video/mp4" />
							</video>
						</div>
						<div className="dark" />
					</div>
					<div className="overlayWrap">
						<div className="titleBox">
							<p className="title condensed">
								taja
							</p>
						</div>
						<div className="lineVertical line"></div>
						<div className="contentsWrap">
							<p><b>taja</b></p>
							<p><b>TEAM PROJECT</b></p>
							<p>&nbsp;</p>
							<p><b>PLATFORM</b></p>
							<p>ANDROID</p>
							<p>IOS</p>
							<p>&nbsp;</p>
							<p><b>ROLE</b></p>
							<p>PLAN</p>
							<p>DESIGN</p>
							<p>DEVELOPE</p>
							<p>&nbsp;</p>
							<p><b>SIZE</b></p>
							<p>RESPONSIVE</p>
							<p>BASED ON 1080 x 1920</p>
							<p>&nbsp;</p>
							<p><b>TOOLS</b></p>
							<p>ADOBE PHOTOSHOP</p>
							<p>ADOBE ILLUSTRATOR</p>
							<p>VS CODE</p>
							<p>&nbsp;</p>
							<p><b>SKILLS</b></p>
							<p>ECMASCRIPT</p>
							<p>REACT-NATIVE</p>
							<p>SENDBIRD</p>
							<p>AWS ARCHITECTURE</p>
							<p><b>HONOR</b></p>
							<p>THE FIRST PRIZE</p>
							<p>LSD PROGRAM</p>
							<p>ANYANG UNIVERSITY</p>
						</div>
						<div className="indexWrap">
							<div className="lineVertical line"></div>
							<p className="index">
								application
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Title