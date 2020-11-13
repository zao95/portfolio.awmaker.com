import React from 'react'
import restaiVideo from "../../../assets/video/restai.mp4"

const Title = () => {
	return (
		<>
            <div id="section5Title" className="titlePageWrap pageWrap">
				<div className="titleWrap">
					<div className="background">
						<div className="videoWrap">
							<video className="video" autoPlay muted={true}>
								<source src={restaiVideo} type="video/mp4" />
							</video>
						</div>
						<div className="dark" />
					</div>
					<div className="overlayWrap">
						<div className="titleBox">
							<p className="title condensed">
								restai
							</p>
						</div>
						<div className="lineVertical line"></div>
						<div className="contentsWrap">
							<p><b>restai</b></p>
							<p><b>TEAM PROJECT</b></p>
							<p>&nbsp;</p>
							<p><b>ROLE</b></p>
							<p>DESIGN</p>
							<p>&nbsp;</p>
							<p><b>SIZE</b></p>
							<p>RESPONSIVE</p>
							<p>BASED ON 1280 x 2392</p>
							<p>&nbsp;</p>
							<p><b>TOOLS</b></p>
							<p>ADOBE PHOTOSHOP</p>
							<p>ADOBE ILLUSTRATOR</p>
							<p>ADOBE XD</p>
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