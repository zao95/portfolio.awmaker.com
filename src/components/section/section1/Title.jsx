import React from 'react'
import onlinePortfolioVideo from "../../../assets/video/online_portfolio.mp4"

const Title = () => {
	return (
		<>
            <div id="section1Title" className="titlePageWrap pageWrap">
				<div className="titleWrap">
					<div className="background">
						<div className="videoWrap">
							<video className="video" autoPlay muted={true}>
								<source src={onlinePortfolioVideo} type="video/mp4" />
							</video>
						</div>
						<div className="dark" />
					</div>
					<div className="overlayWrap">
						<div className="titleBox">
							<p className="title condensed">
								onl ine portfolio
							</p>
						</div>
						<div className="lineVertical line"></div>
						<div className="contentsWrap">
							<p><b>ONLINE PORTFOLIO</b></p>
							<p><b>PERSONAL PROJECT</b></p>
							<p>&nbsp;</p>
							<p><b>PLATFORM</b></p>
							<p>WEBSITE</p>
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